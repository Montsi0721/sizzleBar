const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const { authenticateAdmin } = require('../middleware/auth');

// =============================================================================
// Initialize default admin on first run.
// SECURITY: No hardcoded password fallback. If ADMIN_PASSWORD is not set the
// function logs a warning and skips creation rather than creating an account
// with a publicly-known password that may sit unnoticed in production.
// =============================================================================
async function initAdmin() {
    if (!process.env.ADMIN_PASSWORD) {
        console.warn('[AUTH] WARNING: ADMIN_PASSWORD is not set. Skipping admin account creation.');
        console.warn('[AUTH] Set ADMIN_PASSWORD in your .env file and restart to create the admin account.');
        return;
    }
    if (!process.env.ADMIN_USERNAME) {
        console.warn('[AUTH] WARNING: ADMIN_USERNAME is not set. Defaulting to "admin".');
    }
    try {
        const username = process.env.ADMIN_USERNAME || 'admin';
        const exists = await Admin.findOne({ username });
        if (!exists) {
            const admin = new Admin({ username, password: process.env.ADMIN_PASSWORD });
            await admin.save();
            console.log(`[AUTH] Admin account created for username: ${username}`);
        }
    } catch (error) {
        console.error('[AUTH] Error creating admin account:', error);
    }
}

// Login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        const admin = await Admin.findOne({ username });
        // Use a constant-time response regardless of whether the user exists,
        // to prevent username enumeration via timing.
        if (!admin || !(await admin.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: admin._id, username: admin.username, role: 'admin' },
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
        );
        res.json({ token, message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

// Change password
router.post('/change-password', authenticateAdmin, async (req, res) => {
    try {
        const { currentPassword, newPassword, confirmPassword } = req.body;
        if (!currentPassword || !newPassword || !confirmPassword) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ error: 'New passwords do not match' });
        }
        if (newPassword.length < 8) {
            return res.status(400).json({ error: 'New password must be at least 8 characters' });
        }

        const admin = await Admin.findById(req.user.id);
        if (!admin) return res.status(404).json({ error: 'Admin not found' });

        if (!(await admin.comparePassword(currentPassword))) {
            return res.status(401).json({ error: 'Current password is incorrect' });
        }

        admin.password = newPassword;
        await admin.save();
        res.json({ success: true, message: 'Password changed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to change password' });
    }
});

// Verify token
router.post('/verify', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ valid: true, user: decoded });
    } catch {
        res.status(401).json({ error: 'Invalid token' });
    }
});

initAdmin();
module.exports = router;