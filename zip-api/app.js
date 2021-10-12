const express = require("express");
const app = express();

const zipdb = require("./zipData");

const PORT = process.env.PORT || 8000;

//console.log(zipdb.byZip);
//const zipCode = zipdb.byZip.Zipcode

app.get("/", (req, res) => {
    res.json({ test: "Yay" });
});

app.get("/zip/:zipcode", (req, res) => {
    // fill in...

    //res.json([{ zipcode: req.params.zipcode}]);
  res.json(zipdb.byZip[req.params.zipcode])
    //res.json(zipdb);
});

app.get("/city/:cityname", (req, res) => {
    // fill in...
    //const cityname = req.params.City;
    //res.json(zipdb.byCity[cityname]);
    //res.json([{ city: res.params.cityname }]);
  res.json(zipdb.byCity[req.params.cityname])
});

app.listen(PORT, () => {
    console.log(`zip-api is up and running on ${PORT}`);
});

// const reqZip = req.params.Zipcode;
// if (!(reqZip in zipdb.byZip)) res.status(404).send("Not Found");
// else res.json(zipdb.byZip[reqZip])