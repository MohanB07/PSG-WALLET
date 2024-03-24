const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { readdirSync } = require('fs');
const { db } = require('./db');
require('./routes/route');

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST'], // Allow only GET and POST requests
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specific headers
};

app.use(cors(corsOptions));


readdirSync('./routes').map((route) => app.use('/PSG-WALLET', require('./routes/' + route)));

const server = () => {
  db(); 
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

server();
