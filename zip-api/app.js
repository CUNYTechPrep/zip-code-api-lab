const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const zipCode = req.params.zipcode;
  if (zipdb.byZip[zipCode] === undefined) {
    res.sendStatus(404);
  } else {
    res.json( zipdb.byZip[zipCode] );
  }
});


app.get('/city/:cityname', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const cityName = req.params.cityname;
  if (zipdb.byCity[cityName] === undefined) {
    res.sendStatus(404);
  } else {
    res.json( zipdb.byCity[cityName] );
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
