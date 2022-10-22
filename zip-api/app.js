const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


//console.log(zipdb.byCity);

app.get("/", (req, res) => {
    res.json({ test: "Yaaa" });
});


app.get('/zip/:zipcode', (req, res) => {
  const zipcode = req.params.zipcode
  res.json(zipdb.byZip[zipcode] ? zipdb.byZip[zipcode] : "Not Found");
});


app.get('/city/:cityname', (req, res) => {
  const city = req.params.cityname.toUpperCase();
  res.json(zipdb.byCity[city] ? zipdb.byCity[city] : "Not Found");
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
