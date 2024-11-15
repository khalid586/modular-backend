const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/cors.config');
const connectDB = require('./config/db.config');
const initializeRoutes = require('./routes/index.routes');

async function createApp() {
    const app = express();

    // Middleware setup
    app.use(cors(corsOptions));
    app.use(express.json());

    // Database connection
    const dbClient = await connectDB();

    // Initialize routes
    initializeRoutes(app, dbClient);

    return app;
}

module.exports = createApp;
