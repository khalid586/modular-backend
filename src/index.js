const createApp = require('./app');
const port = process.env.PORT || 5007;

(async () => {
    try {
        const app = await createApp();
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
})();
