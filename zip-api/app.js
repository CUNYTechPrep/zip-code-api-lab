const express = require("express");
const app = express();

const zipdb = require("./zipData");

const PORT = process.env.PORT || 8000;

// console.log(zipdb.byCity);

app.get("/", (req, res) => {
  res.json({ test: "Yay" });
});

app.get("/zip/:zipcode", (req, res) => {
  // fill in...
  let params = req.params.zipcode;
  if (zipdb.byZip[params]) {
    res.json(zipdb.byZip[params]);
  } else {
    res.status(404).json("Invalid zip code, try again");
  }
});

app.get("/city/:cityname", (req, res) => {
  // fill in...
  let params = req.params.cityname;
  if (zipdb.byCity[params]) {
    res.json(zipdb.byCity[params]);
  } else {
    res.status(404).json("Invalid city, try again");
  }
});

app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
