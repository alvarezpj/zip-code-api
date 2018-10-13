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
    //res.status(404).send("Not Found");
    res.sendStatus(404);
  }
});


app.get('/city/:cityname', (req, res, next) => {
  const cityInfo = zipdb.byCity[req.params.cityname];

  if(cityInfo) {
    res.json(cityInfo);
  } else {
    //res.status(404).send("Not Found");
    res.sendStatus(404);
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
