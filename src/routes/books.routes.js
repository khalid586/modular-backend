const express = require('express');
const {
    getAllBooks,
    getBooksByUploader,
    getBookDetails,
    addBook,
    updateBook,
    deleteBook,
} = require('../controllers/books.controller');

function booksRoutes(dbClient) {
    const router = express.Router();
    const booksCollection = dbClient.db('BooksCollection').collection('books');

    router.get('/', (req, res) => getAllBooks(req, res, booksCollection));
    router.get('/added_books/:email', (req, res) => getBooksByUploader(req, res, booksCollection));
    router.get('/details/:id', (req, res) => getBookDetails(req, res, booksCollection));
    router.post('/add_book', (req, res) => addBook(req, res, booksCollection));
    router.patch('/update/:id', (req, res) => updateBook(req, res, booksCollection));
    router.delete('/delete/:id', (req, res) => deleteBook(req, res, booksCollection));

    return router;
}

module.exports = booksRoutes;
