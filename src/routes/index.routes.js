const express = require('express');
const booksRoutes = require('./books.routes');

function initializeRoutes(app, dbClient) {
    app.use('/books', booksRoutes(dbClient));
    app.get('/', (req, res) => {
        res.send('API is running - Version 1.0');
    });
}

module.exports = initializeRoutes;
