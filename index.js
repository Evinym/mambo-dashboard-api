const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PlaneService = require('./src/PlaneService');

let port = 8083;
let app = express();

mongoose.connect('mongodb://localhost/mambo');


app.use('/planes', PlaneService);

app.get('/', (req, res) => {
      res.end('Bonjour à tous');
    }
);


app.use(cors());
app.listen(port);