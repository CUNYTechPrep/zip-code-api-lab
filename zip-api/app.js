const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);
// console.log(zipdb.byCity['as'])

app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zip = req.params.zipcode
  if(zip in zipdb.byZip)
   res.json(zipdb.byZip[zip])
  else {
    res.sendStatus(404)
  }
});


app.get('/city/:cityname', (req, res) => {
  const cityName = req.params.cityname 
  if(cityName in zipdb.byCity)
    res.json(zipdb.byCity[cityName])
  else {
    res.sendStatus(404)
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
