const express = require('express')
require('dotenv').config()
const cors = require('cors')
const {readdirSync} = require('fs')
const {db} = require('./db')
require('./routes/route')

const app = express();

const PORT = process.env.PORT

app.use(express.json())
app.use(cors({origin: true, credentials: true}))

readdirSync('./routes').map((route) => app.use('/PSG-WALLET',require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT , () => {
        console.log(`server listening ${PORT}`);
    })
}

server()