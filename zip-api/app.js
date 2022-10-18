const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  //extract route parameter | zipCode : string
  const zipCode = req.params.zipcode;
  //access value through byZip object through zipCode key
  let result = zipdb.byZip[zipCode];
  //return JSON data
  res.json(result);
});


app.get('/city/:cityname', (req, res) => {
  //extract route param.
  const cityName = req.params.cityname;
  //access data associated with key
  let result  = zipdb.byCity[cityName];
  //return JSON data
  res.json(result);
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
