const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'yay!'});
});


app.get('/zip/:zipcode', (req, res) => {
  
  // fill in...
  const zip = req.params.zipcode;
  res.status(200).json({[zip]:zipdb.byZip[zip]});
});


app.get('/city/:cityname', (req, res) => {
  // fill in...
  const city = req.params.cityname.toUpperCase();
  res.status(200).json({[city]:zipdb.byCity[city]})
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
