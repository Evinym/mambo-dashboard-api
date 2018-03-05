const mongoose = require('mongoose');
const express = require('express');
const Plane = require('./Plane');

let app = express();

app.use('/all', (req, res) => {
  let planes = "test";

  Plane.aggregate([
    {
      $group: {
        _id: "$hex",
        positions: {
          $push: {
            lat: "$lat",
            lng: "$lng"
          }
        }
      }
    }
  ], (err, results) => {
    planes = results;
    res.end(JSON.stringify(planes));
  });

});


module.exports = app;