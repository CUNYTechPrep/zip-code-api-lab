const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  let zip = zipdb.byZip[req.params.zipcode];
  res.json(zip)
});


app.get('/city/:cityname', (req, res) => {
  let city = zipdb.byCity[req.params.cityname.toUpperCase()];
  res.json(city)
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
