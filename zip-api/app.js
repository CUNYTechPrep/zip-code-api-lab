const { query } = require("express");
const express = require("express");
const app = express();
const { capitalize } = require("./utils");

const zipdb = require("./zipData");

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ test: "Yay" });
});

app.get("/zip/:zipcode", (req, res) => {
  const queryparams = req.query;

  const zipcode = req.params.zipcode;

  const response = zipdb.byZip[zipcode];

  try {
    if (Object.keys(queryparams).length) {
      const filteredRes = [];
      for (let zip of response) {
        if (
          Object.keys(queryparams).every(
            (q) => zip[capitalize(q)] == queryparams[q]
          )
        )
          filteredRes.push(zip);
      }

      res.json(filteredRes);
    } else {
      res.json(response);
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/city/:cityname", (req, res) => {
  const cityname = req.params.cityname;

  const response = zipdb.byCity[cityname.toUpperCase()];

  try {
    const newResponse = {};

    for (let zip of response) {
      newResponse[zip] = zipdb.byZip[zip];
    }

    res.json(newResponse);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
