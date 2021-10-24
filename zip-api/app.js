const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json('Hello World');
});

app.get('/zip/:zipcode', (req, res) => {
  const cities = zipdb.byCity[req.params.zipcode];
  if(!zipCodes){
    res.sendStatus(404);
  }
  res.json(zipCodes);
});

app.get('/city/:cityname', (req, res) => {
  const zipcodes = zipdb.byCity[req.params.cityname];
  if(!zipcodes){
    res.sendStatus(404);
  }
  res.json(zipcodes);
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
