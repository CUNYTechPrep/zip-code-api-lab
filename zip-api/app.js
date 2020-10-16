const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zipcode = req.params.zipcode;
  const data = zipdb["byZip"][zipcode];

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).send("Not Found");
  }
});

app.get('/city/:cityname', (req, res) => {
  const cityname = req.params.cityname;
  const data = zipdb["byCity"][cityname];

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).send("Not Found");
  }
});



app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
