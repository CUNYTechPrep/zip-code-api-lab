const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);
// console.log(zipdb.byZip[12822])

app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zip = req.params.zipcode;
  results = [];
  results.push(zipdb.byZip[zip]);
  res.json(results);
});


app.get('/city/:cityname', (req, res) => {
  const cityName = req.params.cityname.toUpperCase();
  results = [];
  results.push(zipdb.byCity[cityName]);
  res.json(results);
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
