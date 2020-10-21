const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;
const ZIP_URL = "http://ctp-zip-api.herokuapp.com/zip";
const CITY_URL = "http://ctp-zip-api.herokuapp.com/city";


// console.log(zipdb.byCity);

app.use(express.static("static"))

app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});

app.get('/zip/:zipcode', (req, res) => {
   
  res.status(200).send({zip: `Your zip: ${req.params.zipcode}`});
  // fill in...
});


app.get('/city/:cityname', (req, res) => {
  // fill in...
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
