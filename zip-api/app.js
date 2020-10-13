const express = require('express');
const { restart } = require('nodemon');
const { byZip } = require('./zipData');
const { byCity } = require('./zipData');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;

const results = {};


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
    const zip = req.params.zipcode;
    if (byZip[zip] === undefined){
      res.status(404).send('NOT FOUND');
    } 
    else{
    res.status(200).json(byZip[zip]);
    }
});


app.get('/city/:cityname', (req, res) => {
  const city = req.params.cityname;
  console.log(city);
  if (byCity[city] === undefined){
    res.status(404).send('NOT FOUND');
  } 
  else{
  res.status(200).json(byCity[city]);
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
