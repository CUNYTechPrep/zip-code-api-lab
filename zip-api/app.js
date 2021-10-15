const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zipcode = req.params.zipcode;
  if(zipcode===undefined){
    res.status(404).send("not found")
  } else{
    res.send("this is the zipcode route handler")
  }
});


app.get('/city/:cityname', (req, res) => {
  const cityname = req.params.cityname;

  if(cityname===undefined){
    res.status(404).send("not found")
  }else{
    res.send("this is the city name route handler")
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
