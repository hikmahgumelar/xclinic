const express = require('express');
const router = express.router();

//router test api
router.get('/api/hello', (req,res) => {
  res.send({data:'hello men'});
});

module.exports = router;
