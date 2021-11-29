const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get("/", (req, res) => {
  res.json({ test: "Yay" });
});

app.get("/zip/:zipcode", (req, res) => {
  const zipcode = req.params.zipcode;
  res.staus(200).json(zipdb.byZip[zipcode]);
});

app.get("/city/:cityname", (req, res) => {
  const cityname = req.params.cityname;
  res.staus(200).json(zipdb.byCity[cityname]);
});



app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
