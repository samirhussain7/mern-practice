const express = require('express');

const app = express();

function middleware() {
    app.use(express.json())
}

module.exports = middleware;