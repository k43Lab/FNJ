const express = require('express');
const dotenv = require('dotenv');
const proxy_router = require('./src/router');

dotenv.config();
const app = express();

proxy_router.load(app);

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server running at http://${process.env.HOST}:${process.env.PORT}`);
});