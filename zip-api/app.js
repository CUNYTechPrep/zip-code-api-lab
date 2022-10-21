const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const code = req.params.zipcode;
  const data = zipdb.byZip[code];
  res.json(data);
});


app.get('/city/:cityname', (req, res) => {
  const city = req.params.cityname;
  const content = zipdb.byCity[city];
  res.json(content); 
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
