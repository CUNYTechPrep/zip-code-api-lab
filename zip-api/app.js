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

  const zipcode = req.params.zipcode;

  if (zipcode.length !== 5) {
    req.status(404).send("404 Not Found");
  }
  else {
    res.json({
      zipCode: zipcode,
      data: zipdb.byZip[zipcode]
    })
  }
});


app.get('/city/:cityname', (req, res) => {
  // fill in...

  const city = req.params.cityname.toUpperCase();

  if (city === undefined) {
    req.status(404).send("404 Not Found");
  }
  else {
    res.json({
      cityName: city,
      data: zipdb.byCity[city]
    })
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
