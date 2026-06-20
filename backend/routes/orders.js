const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Minimal HTML escaping to prevent injected content in email bodies
function sanitize(val) {
    return String(val || '').replace(/[<>"'&]/g, c =>
        ({ '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '&': '&amp;' }[c])
    );
}

// Lazily create transporter so we don't error on startup if email isn't configured
function createTransporter() {
    return nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
}

router.post('/', async (req, res) => {
    const { orderNumber, customerName, customerPhone, item, quantity, total, specialInstructions, timestamp } = req.body;

    // Validate required fields
    if (!customerName || !customerPhone || !item || !orderNumber) {
        return res.status(400).json({ error: 'Missing required order fields' });
    }

    // Always log the order so it isn't lost even if email fails
    console.log('[ORDER RECEIVED]', {
        orderNumber: sanitize(orderNumber),
        timestamp: sanitize(timestamp),
        customerName: sanitize(customerName),
        customerPhone: sanitize(customerPhone),
        item: sanitize(item),
        quantity,
        total,
        specialInstructions: sanitize(specialInstructions || 'None')
    });

    // If email env vars aren't set, accept the order but skip email
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.ORDER_EMAIL) {
        console.warn('[ORDERS] Email not configured — set EMAIL_USER, EMAIL_PASS, ORDER_EMAIL in .env to enable notifications.');
        return res.json({ success: true, message: 'Order received' });
    }

    try {
        const transporter = createTransporter();

        await transporter.sendMail({
            from: `"Top Grill Orders" <${process.env.EMAIL_USER}>`,
            to: process.env.ORDER_EMAIL,
            subject: `New Order #${sanitize(orderNumber)} — Top Grill`,
            html: `
                <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#1a1a1a;color:#ffffff;padding:30px;border-radius:8px;">
                    <h2 style="color:#f9a602;border-bottom:2px solid #c8102e;padding-bottom:12px;margin-top:0;">
                        🔥 New Order Received
                    </h2>
                    <table style="width:100%;border-collapse:collapse;font-size:15px;">
                        <tr><td style="padding:8px 0;color:#f9a602;width:38%"><strong>Order #</strong></td><td>${sanitize(orderNumber)}</td></tr>
                        <tr><td style="padding:8px 0;color:#f9a602"><strong>Time</strong></td><td>${sanitize(timestamp)}</td></tr>
                        <tr><td style="padding:8px 0;color:#f9a602"><strong>Customer</strong></td><td>${sanitize(customerName)}</td></tr>
                        <tr><td style="padding:8px 0;color:#f9a602"><strong>Phone</strong></td><td>${sanitize(customerPhone)}</td></tr>
                        <tr><td style="padding:8px 0;color:#f9a602"><strong>Item</strong></td><td>${sanitize(item)}</td></tr>
                        <tr><td style="padding:8px 0;color:#f9a602"><strong>Quantity</strong></td><td>${sanitize(String(quantity))}</td></tr>
                        <tr><td style="padding:8px 0;color:#f9a602"><strong>Total</strong></td>
                            <td style="font-size:1.2em;color:#4caf50"><strong>${sanitize(String(total))}</strong></td></tr>
                        <tr><td style="padding:8px 0;color:#f9a602"><strong>Instructions</strong></td><td>${sanitize(specialInstructions || 'None')}</td></tr>
                    </table>
                    <p style="margin-top:24px;color:#666;font-size:0.8em;">Top Grill — Maseru, Lesotho</p>
                </div>
            `
        });

        res.json({ success: true });
    } catch (error) {
        // Log the error server-side but don't expose details to the client.
        // The order was already logged above, so it isn't lost.
        console.error('[ORDERS] Email send error:', error.message);
        res.json({ success: true, message: 'Order received (notification pending)' });
    }
});

module.exports = router;