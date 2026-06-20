const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { authenticateAdmin } = require('../middleware/auth');

// =============================================================================
// Magic byte validation
// SECURITY: file.mimetype comes from the HTTP request headers — it's whatever
// the client claims. We read the first 12 bytes of the actual file on disk and
// check the signature instead of trusting the header.
// =============================================================================
function validateImageMagicBytes(filePath) {
    try {
        const fd = fs.openSync(filePath, 'r');
        const buf = Buffer.alloc(12);
        fs.readSync(fd, buf, 0, 12, 0);
        fs.closeSync(fd);

        const isJpeg = buf[0] === 0xFF && buf[1] === 0xD8 && buf[2] === 0xFF;
        const isPng  = buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47;
        const isGif  = buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46;
        // WebP: "RIFF" at 0–3, "WEBP" at 8–11
        const isWebp = buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46
                    && buf[8] === 0x57 && buf[9] === 0x45 && buf[10] === 0x42 && buf[11] === 0x50;

        return isJpeg || isPng || isGif || isWebp;
    } catch {
        return false;
    }
}

function deleteUploadedFile(filePath) {
    try { if (fs.existsSync(filePath)) fs.unlinkSync(filePath); } catch {}
}

// Multer storage config
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const uploadDir = path.join(__dirname, '../assets');
        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
        cb(null, uploadDir);
    },
    filename: function(req, file, cb) {
        const suffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname).toLowerCase();
        cb(null, 'menu-' + suffix + ext);
    }
});

// Pre-upload filter: reject obviously wrong extensions/mime types before writing to disk.
// Magic byte check below is the real defence; this is a first pass.
const fileFilter = (req, file, cb) => {
    const allowedExts = /\.(jpeg|jpg|png|gif|webp)$/i;
    const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];

    if (!allowedExts.test(file.originalname) || !allowedMimes.includes(file.mimetype)) {
        return cb(new Error('Only image files (jpg, png, gif, webp) are allowed'));
    }
    cb(null, true);
};

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
    fileFilter
});

// Upload image
router.post('/image', authenticateAdmin, upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    // SECURITY: validate the actual file bytes, not the declared content-type
    if (!validateImageMagicBytes(req.file.path)) {
        deleteUploadedFile(req.file.path);
        return res.status(400).json({ error: 'Uploaded file is not a valid image' });
    }

    const imageUrl = `/assets/${req.file.filename}`;
    res.json({ success: true, imageUrl, message: 'Image uploaded successfully' });
});

// Delete image
router.delete('/image', authenticateAdmin, (req, res) => {
    const { imagePath } = req.body;
    if (!imagePath) {
        return res.status(400).json({ error: 'No image path provided' });
    }

    // Prevent path traversal: only allow basenames inside /assets/
    const filename = path.basename(imagePath);
    const filePath = path.join(__dirname, '../assets', filename);

    deleteUploadedFile(filePath);
    res.json({ success: true, message: 'Image deleted successfully' });
});

module.exports = router;