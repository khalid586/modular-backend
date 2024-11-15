const { ObjectId } = require('mongodb');

async function getAllBooks(req, res, booksCollection) {
    const books = await booksCollection.find().toArray();
    res.send(books);
}

async function getBooksByUploader(req, res, booksCollection) {
    const { email } = req.params;
    const books = await booksCollection.find({ uploaderEmail: email }).toArray();
    res.send(books);
}

async function getBookDetails(req, res, booksCollection) {
    const { id } = req.params;
    const book = await booksCollection.findOne({ _id: new ObjectId(id) });
    res.send(book);
}

async function addBook(req, res, booksCollection) {
    const data = req.body;
    const result = await booksCollection.insertOne(data);
    res.send(result);
}

async function updateBook(req, res, booksCollection) {
    const { id } = req.params;
    const updates = req.body;
    const result = await booksCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updates }
    );
    res.send(result);
}

async function deleteBook(req, res, booksCollection) {
    const { id } = req.params;
    const result = await booksCollection.deleteOne({ _id: new ObjectId(id) });
    res.send(result);
}

module.exports = {
    getAllBooks,
    getBooksByUploader,
    getBookDetails,
    addBook,
    updateBook,
    deleteBook,
};
