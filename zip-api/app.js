const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  // Accessing the byZip object w/ params of the get request with req.params
  const requestCity = zipdb.byZip[req.params.zipcode];
  res.json(requestCity);
});


app.get('/city/:cityname', (req, res) => {
  const requestZip = zipdb.byCity[req.params.cityname];
  res.json(requestZip);

});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
