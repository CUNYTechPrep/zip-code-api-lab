const express = require('express');
const { byZip, byCity } = require('./zipData');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zip = req.params.zipcode;
  const results = byZip[zip];
  res.send(results);
});


app.get('/city/:cityname', (req, res) => {
  // fill in...
  const city = req.params.cityname; 
  const results = byCity[city];
  res.send(results);
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
