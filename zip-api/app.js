const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  let zipcode = req.params.zipcode;

  if(zipcode in zipdb.byZip){
    res.json(
      zipdb.byZip[zipcode]
    )
  } else {
    res.status(404).send(`Error: ${ zipcode } was not found. Please enter a different zipcode.`)
  }
});


app.get('/city/:cityname', (req, res) => {
  let cityname = req.params.cityname.toUpperCase();

  if(cityname in zipdb.byCity){
    res.json(
      zipdb.byCity[cityname]
    )
  } else {
    res.status(404).send(`Error: ${ cityname } was not found. Please enter a different city.`)
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
