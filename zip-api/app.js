const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => { 
  const zipcode = req.params.zipcode
  const zipData = zipdb.byZip[zipcode]
  res.send(zipData ? zipData : 'Not found')
});


app.get('/city/:cityname', (req, res) => {
  const cityname = req.params.cityname
  const cityData = zipdb.byCity[cityname]
  res.send(cityData ? cityData : 'Not found')
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
