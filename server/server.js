const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.port || 8080;
app.use(express.static(path.join(__dirname,'build')));
//router get api
app.get('/api/hello', (req,res) => {
  res.send({data:'hello men'});
});
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
