const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({ test: `Welcome to Jessica's ZIP API lab - to get a zip code add zip/[zipcode] or city/[cityname] to the existing url` });
});


app.get('/zip/:zipcode', (req, res) => {
  const zipcode = req.params.zipcode;



  if (zipcode.length === 5 && (zipcode.match(/^[0-9]+$/) != null)) {
    const results = zipdb.byZip[zipcode];
    res.json(results);
  }
  else {
    res.status(404).send("Not Found");
  }
});


app.get('/city/:cityname', (req, res) => {
  const cityname = req.params.cityname.toUpperCase();
  // console.log(cityname);

  //const tester = encodeURIComponent(cityname);
  //console.log(tester);

  if (cityname.length >= 3) {
    const results = zipdb.byCity[cityname];
    //console.log(results);
    if (results === undefined) {
       res.status(404).send("Not Found"); 
      }
    res.json(results);
  }

  else {
    res.status(404).send("Not Found");
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});