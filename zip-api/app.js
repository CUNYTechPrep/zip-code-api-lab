const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});

app.get('/zip/:zipcode', (req, res) => {
  // get city data from zipData
  const zips = zipdb.byZip[req.params.zipcode];

  // if zipcodes exist, return city data
  // else return 'not found' status code
  if(zips) {
    res.json(zips);
  } else {
    res.sendStatus('404');
  }
});

app.get('/city/:cityname', (req, res) => {
  // get zipcode data from zipData
  const cities = zipdb.byCity[req.params.cityname.toUpperCase()];

  // if city exist, return zipcode info
  // else return 'not found' status code
  if(cities) {
    res.json(cities);
  } else {
    res.sendStatus('404');
  }
});

app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
