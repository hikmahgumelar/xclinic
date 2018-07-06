const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.port || 8080;
const mongoose = require('mongoose');
const router = express.Router();
const routing = require('./router/route');
const Klinik = require('./model/clinics');
app.use(bodyParser.urlencoded({ extented : true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'build')));

//set database
mongoose.connect("mongodb://localhost:27017/xcidic");

//handle koneksi database
const db = mongoose.connection;
db.on('error', console.error.bind(console, '=>koneksi ke database bermasalah'))
db.once('open',() => {
  console.log('=>Terkoneksi ke database');
});
// API Route
app.use('/api', routing);

//Set env mode
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'frontend/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });
}
//express api port
app.listen(port, () => console.log(`server api running on port ${port}`));
