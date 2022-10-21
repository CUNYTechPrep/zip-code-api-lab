const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zipCode = req.params.zipcode;
  const data = zipdb.byZip[zipCode];
  res.json(data);
});


app.get('/city/:cityname', (req, res) => {
  const city = req.params.cityname;
  const data = zipdb.byCity[city];
  res.json(data); 
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
