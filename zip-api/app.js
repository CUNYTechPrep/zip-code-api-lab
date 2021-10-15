const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  // fill in...
  let zip = req.params;
  res.json(zipdb.byZip[zip.zipcode]);
});


app.get('/city/:cityname', (req, res) => {
  let city = req.params;
  res.json(zipdb.byCity[city.cityname]);
  // fill in...
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
