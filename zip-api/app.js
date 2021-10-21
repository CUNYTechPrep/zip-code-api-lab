const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;




app.get('/', (req, res) => {
  res.json({ test: 'Yay' });
});






app.get('/city/:cityname', (req, res) => {
  const cities = req.params.cityname.toUpperCase();


  if (/^[a-zA-Z]+$/.test(cities)) {

    const results = zipdb.byCity[cities];
    if (results === undefined) {
      res.json("city not found!");
    }
    res.json(results);
  } else {
    res.json("city not found!");
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on http://localhost:${PORT}`);
});

app.get('/zip/:zipcode', (req, res) => {
  const zipcode = req.params.zipcode;


  if (zipcode.length === 5) {

    const results = zipdb.byZip[zipcode];
    if (results === undefined) {
      res.json("zip not found!");
    }
    res.json(results);
  } else {
    res.json("zip not found!");
  }



});