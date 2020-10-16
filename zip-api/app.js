const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zip = req.params.zipcode;
  res.json(zipdb.byZip[zip]);
});


app.get('/city/:cityname', (req, res) => {
  const city = req.params.cityname;
  res.json(zipdb.byCity[city]);
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
