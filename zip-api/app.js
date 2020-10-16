const express = require('express');
const { byZip, byCity } = require('./zipData');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zip = req.params.zipcode;
  if(byZip[zip] === undefined)
    res.status(404).send('Not Found');
  else
    res.status(200).json(byZip[zip]);
});


app.get('/city/:cityname', (req, res) => {
  const city = req.params.cityname;
  if(byCity[city] === undefined)
    res.status(404).send('Not found');
  else
    res.status(200).json(byCity[city]);
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
