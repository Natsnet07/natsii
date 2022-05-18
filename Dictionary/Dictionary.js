const express = require('express');
const app = express();
const path = require('path');
const wordJs = require('./word.js');
const port = 8080;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

app.use(express.urlencoded({
    extended: true
}))

app.post('/search', (req, res) => {
    const term = req.body.term
    wordJs.searchTerm(term, res);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})