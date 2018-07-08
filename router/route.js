const express = require('express');
const router = express.Router();
const Klinik = require('../model/clinics');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
//router test api
//token api
const rahasia = "xcidic";

router.get('/hello', (req,res) => {
  if(req.headers.rahasia == rahasia) {
  res.send({ nama:'hello men' , nama:'hello gum'});
}
  res.send({ nama:'siapa nih', nama: 'gw kagak kenal nih'});
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
   Klinik.find((err,hasil) => {
if(err) throw err;
   res.json(hasil);
});
});

module.exports = router;
