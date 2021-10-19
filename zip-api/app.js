const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.send('ZIP API LAB, PLEASE SPECIFY WHICH API YOU WOULD LIKE TO ACCESS IN THE URL. i.e ZIP or CITY')
});


app.get('/zip/:zipcode', (req, res) => {
  const zipcode  = req.params.zipcode
  if(zipcode.length === 5 && (zipcode.match(/^[0-9]+$/) != null)){
    const results  = zipdb.byZip[zipcode]
    if(results){
      res.json(results)
    }else {
      res.status(404).send("No Results!")
    }
  } else {
    res.status(404).send("invalid Zip!")
  }
});


app.get('/city/:cityname', (req, res) => {
  const cityname = (req.params.cityname).toUpperCase()
  if(cityname.length >= 3){
    const results = zipdb.byCity[cityname]
    if(results){
      res.json(results)
    }else {
      res.status(404).send("No Results!")
    }
  }else {
    res.status(404).send("Try a longer text!")
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
