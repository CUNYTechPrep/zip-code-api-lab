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

  if(zipdb.byZip[zip] === undefined){
    res.status(400).send("Error 404 zipcode not found")
  }else{
    res.json(zipdb.byZip[zip.zipcode]);
  }
});


app.get('/city/:cityname', (req, res) => {
  let city = req.params.cityname;
  
  if(zipdb.byCity[city] === undefined){
    res.status(400).send("Error 404 city not found")
  }else{
    res.json(zipdb.byCity[city.cityname]);
  }
  // fill in...
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
