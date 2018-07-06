const express = require('express');
const router = express.Router();
const Klinik = require('../model/clinics');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
//router test api
router.get('/hello', (req,res) => {
  res.send({ pesan:'hello men'});
});
//add data
router.post('/add', (req,res) => {
  var rs = new Klinik();
  rs.nama = req.body.nama;
  rs.role = req.body.role;
  rs.save((err) => {
    if(err)
      res.send(err);
  res.json({"pesan": 'berhasil disimpan'});
});
});
//tampilkan semua data
router.get('/list',(req, res)=> {
  Klinik.find((e, hasil) => {
    if(e)
    res.send(e);
  res.json(hasil);
});
});
//tampilkan data berdasarkan //

module.exports = router;
