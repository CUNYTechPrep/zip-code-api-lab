const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  // fill in...
  let zip = req.params.zipcode;
  let response = zipdb.byZip[zip];

  if(response === undefined){
    res.status(404).send('ERROR 404, ZIPCODE NOT FOUND');
  }else{
    res.json(response);
  }
});


app.get('/city/:cityname', (req, res) => {
  // fill in...
  let city = req.params.cityname;
  let response = zipdb.byCity[city];
  if(response === undefined){
    res.status(404).send('ERROR 404, CITY NOT FOUND');
  }else{
    res.json(response);
  }
  
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
