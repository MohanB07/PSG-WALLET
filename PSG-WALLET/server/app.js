const express = require('express')
require('dotenv').config();
const {db} = require('./db');

const app = express();

const PORT = process.env.PORT

const server = () => {
    db()
    app.listen(PORT , () => {
        console.log("server is listening");
    })
}

server()