const { json, response } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

const { byZip, byCity } = require("./zipData");

const PORT = process.env.PORT || 8000;

// console.log(zipdb.byCity);

app.get("/", (req, res) => {
  res.json({ test: "Yay" });
});

app.get("/zip/:zipcode", (req, res) => {
  // fill in...
  const zip = req.params.zipcode;
  //console.log(zip);
  res.json(byZip[zip]);
});

app.get("/city/:cityname", (req, res) => {
  // fill in...
  const ctname = req.params.cityname.toUpperCase();
  //console.log(ctname);
  res.json(byCity[ctname]);
});

app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
