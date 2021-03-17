const express = require("express");
const app = express();

const zipdb = require("./zipData");

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ data: "Hello! Try /zip/:10003 or /zip/:brooklyn" });
});

app.get("/zip/:zipcode", (req, res) => {
  var param = req.params.zipcode;
  param = param.replace(/:/g, "");

  const data = zipdb.byZip[param];

  if (data != null) {
    res.status(200).send({ data: data });
  } else {
    res.status(404).send({ data: "Not available" });
  }
});

app.get("/city/:cityname", (req, res) => {
  var param = req.params.cityname;
  param = param.replace(/:/g, "");
  param = param.toUpperCase();

  const data = zipdb.byCity[param];

  if (data != null) {
    res.status(200).send({ data: data });
  } else {
    res.status(404).send({ data: "Not available" });
  }
});

app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
