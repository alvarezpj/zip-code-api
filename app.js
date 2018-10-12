const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res, next) => {
  const zipInfo = zipdb.byZip[req.params.zipcode];

  if(zipInfo) {
    res.json(zipInfo);
  } else {
    res.status(404).send("Not Found");
  }
});


app.get('/city/:cityname', (req, res, next) => {
  // fill in...
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
