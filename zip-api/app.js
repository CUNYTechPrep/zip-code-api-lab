const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  //looks for zipcode in database and returns value otherwise error
  const reqZip = req.params.zipcode
  if (!(reqZip in zipdb.byZip))
    res.status(404).send('Not Found');
  else
    res.json(zipdb.byZip[reqZip])
  
});


app.get('/city/:cityname', (req, res) => {
  //looks for city in database and returns value otherwise error
  const reqCity = req.params.cityname;
  if (!(reqCity in zipdb.byCity))
    res.status(404).send('Not Found');
  else
    res.json(zipdb.byCity[reqCity])
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
