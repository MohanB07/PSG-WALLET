const express = require('express')
require('dotenv').config();
const cors = require('cors');
const {db} = require('./db');

const app = express();

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

const server = () => {
    db()
    app.listen(PORT , () => {
        console.log(`server listening ${PORT}`);
    })
}

server()