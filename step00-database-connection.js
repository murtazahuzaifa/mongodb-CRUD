require('dotenv').config();
const mongoose = require('mongoose');

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('mongoose is open for working');
    } catch (error) {
        console.log('mongoose connection error', error);
    }
})();