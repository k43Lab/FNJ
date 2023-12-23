const express = require('express');
const dotenv = require('dotenv');
const proxy_router = require('./src/router');

dotenv.config();
const app = express();

app.use((req, res, _next) => {
    res.header('Access-Control-Allow-Origin', '*');
    _next();
})

proxy_router.load(app);

app.use((req, res, _next) => {
    res.status(403);
    res.header('Content-Type', 'application/json');
    res.end('{"status": false}');
});

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server running at http://${process.env.HOST}:${process.env.PORT}`);
});