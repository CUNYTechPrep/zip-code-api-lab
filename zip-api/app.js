const express = require("express");
const app = express();

const zipdb = require("./zipData");

const PORT = process.env.PORT || 8000;

console.log(zipdb.byCity);
//req - the http request object
//res - the http response object

const cityname = app.get("/", (req, res) => {
  res.json({ test: "local host 8000 is running " });
});

app.get("/zip/:zipcode", (req, res) => {
  //params object has all the parameter names that are defined in the url ( route parameters )
  const zipcode = req.params.zipcode;
  //handle zip data - go into the database and search by zipcode
  const zipData = zipdb.byZip[zipcode];

  try {
    res.send(zipData);
  } catch (err) {
    res.status(500).send("Something broke!");
  }
});

app.get("/city/:cityname", (req, res) => {
  const cityname = req.params.cityname;
  //handle city data - go into the database and search by city name
  const cityData = zipdb.byCity[cityname];
  try {
    res.send(cityData);
  } catch (err) {
    res
      .status(500)
      .send("City was not found, please write all capital letters ");
  }
});

app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
