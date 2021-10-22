const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;

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
    res.status(404).send("Error. That zipcode was not found.")
  }
});


app.get('/city/:cityname', (req, res) => {
  let cityname = req.params.cityname.toUpperCase();

  if(cityname in zipdb.byCity){
    res.json(
      zipdb.byCity[cityname]
    )
  } else {
    res.status(404).send("Error. That city was not found.")
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
