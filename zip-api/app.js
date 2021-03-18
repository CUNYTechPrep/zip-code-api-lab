const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;

// console.log(zipdb.byZip);
// console.log(zipdb.byCity);

app.get('/', (req, res) => {
  res.json({ test: 'Yay' });
});


app.get('/zip/:zipcode', (req, res) => {
  // fill in...
  const zip = req.params.zipcode;
  const result = zipdb.byZip[zip];
  try {
    if (result !== undefined) {
      res.status(200).json(result);
    }
    else{
      res.status(500).send('Invalid Zip');
    }
  } catch (err) {
    console.log(err);
  }
});


app.get('/city/:cityname', (req, res) => {
  // fill in...
  const city = req.params.cityname.toUpperCase();
  const result = zipdb.byCity[city];
  try {
    if (result !== undefined) {
      res.status(200).json(result);
    }
    else{
      res.status(500).send('City not found');
    }
  } catch (err) {
    console.log(err);
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
