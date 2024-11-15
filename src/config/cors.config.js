const corsOptions = {
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'https://books-buy1.web.app',
    ],
    optionsSuccessStatus: 200,
};

module.exports = corsOptions;
