require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        status: 'healthy',
        message: 'LUXORA Backend is running! 🚀',
        timestamp: new Date(),
    });
});

app.get('/api/docs', (req, res) => {
    res.json({
        success: true,
        message: 'LUXORA API Documentation',
        endpoints: {
            health: 'GET /api/health',
            docs: 'GET /api/docs'
        },
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ LUXORA Backend running on port ${PORT}`);
});

module.exports = app;
