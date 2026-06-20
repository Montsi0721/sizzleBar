const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const fs = require('fs');

dotenv.config();

// =============================================================================
// SECURITY: Refuse to start if critical env vars are missing.
// A missing JWT_SECRET would make jwt.sign() use undefined as the key, meaning
// every token is signed with the same predictable "secret".
// =============================================================================
const REQUIRED_ENV = ['JWT_SECRET', 'MONGODB_URI'];
const missing = REQUIRED_ENV.filter(k => !process.env[k]);
if (missing.length) {
    console.error(`FATAL: Missing required environment variables: ${missing.join(', ')}`);
    console.error('Server will not start until these are set in your .env file.');
    process.exit(1);
}

const menuRoutes = require('./routes/menu');
const authRoutes = require('./routes/auth');
const uploadRoutes = require('./routes/upload');
const ordersRoutes = require('./routes/orders');

const app = express();

// Ensure assets directory exists
const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

// Serve static files
app.use('/assets', express.static(assetsDir));

// Security headers
app.use(helmet());

// Trust proxy (must come before rate limiters)
app.set('trust proxy', 1);

app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://127.0.0.1:5500',
        'http://localhost:5500',
        'https://sizzle-bar.onrender.com'
    ],
    credentials: true
}));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =============================================================================
// Rate limiting
// General limiter for all /api/ routes
// =============================================================================
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    standardHeaders: true,
    legacyHeaders: false
});
app.use('/api/', generalLimiter);

// SECURITY: Tighter limiter specifically for login — prevents brute-force attacks.
// 10 attempts per 15 minutes per IP is tight enough to deter brute force while
// not blocking legitimate use.
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many login attempts. Please wait 15 minutes before trying again.' }
});
app.use('/api/auth/login', authLimiter);

// Tight limiter for order submissions too
const orderLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many orders submitted. Please wait before trying again.' }
});
app.use('/api/orders', orderLimiter);

// MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/orders', ordersRoutes);

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));