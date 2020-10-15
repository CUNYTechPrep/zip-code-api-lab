const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  let output = zipdb.byZip[req.params.zipcode];
  res.json(output)
});


app.get('/city/:cityname', (req, res) => {
  let output = zipdb.byCity[req.params.cityname.toUpperCase()];
  res.json(output)
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
