//const e = require('express');
const express = require('express');
const app = express();
const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zip = req.params.zipcode; //refered to from the Slides.
  (zipdb.byZip[zip] === undefined)
    ? res.status(404).send('Error, Zipcode Not Found!')
    : res.status(201).json(zipdb.byZip[zip]);
});


app.get('/city/:cityname', (req, res) => {
  const city = req.params.cityname;
  (zipdb.byCity[city] === undefined) 
    ? res.status(404).send('Error, City Not Found!')
    : res.status(201).json(zipdb.byCity[city]);
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
