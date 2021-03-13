const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  let zip = req.params.zipcode;
  let results = zipdb.byZip[zip];

  if(results){
    res.status(200).json(results);
  } else {
    res.status(404).send("Not Found")
  }
});


app.get('/city/:cityname', (req, res) => {
  let city = req.params.cityname;
  let results = zipdb.byCity[city];

  if(results){
    res.status(200).json(results);
  } else {
    res.status(404).send("Not Found");
  }

});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
