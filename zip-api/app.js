const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


//console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yy'});
});


app.get('/zip/:zipcode', (req, res) => {
const zip = req.params.zipcode;
let x =zipdb.byZip[zip];
res.json(x);

  
});


app.get('/city/:cityname', (req, res) => {
  const city = req.params.cityname;
  let y = zipdb.byCity[city];
  res.json(y);
  
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
