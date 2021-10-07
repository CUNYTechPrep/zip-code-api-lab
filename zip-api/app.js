const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byZip);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  // fill in...
  const zipcode = req.params.zipcode
  const result = zipdb.byZip[zipcode];
  return res.send(result)
});


app.get('/city/:cityname', (req, res) => {
  // fill in...
  const citynames = req.params.cityname
  return res.json(zipdb.byCity[citynames])
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
