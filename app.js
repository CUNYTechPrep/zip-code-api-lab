const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zipcode = req.params.zipcode
  res.json(zipdb.byZip[zipcode]);
  // fill in...
  const inputZip = zipdb.byZip[zipcode]
  if (!inputZip){
    res.status(404).send('Zipcode Not Found')
  }
    res.json(inputZip)
});


app.get('/city/:cityname', (req, res) => {
  const cities = req.params.cityname
  res.json(zipdb.byCity[cities]);
  // fill in...
  const inputCity = zipdb.byCity[cities]
  if (!inputCity){
    res.status(404).send('City Not Found')
  }
    res.json(inputCity)
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
