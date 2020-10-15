const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8080;


// console.log(zipdb.byCity);
const byCity = zipdb.byCity;
const byZip = zipdb.byZip;

app.get('/', (req, res) => {
  res.json({test: "Yay"});
});


app.get('/zip/:zipcode', (req, res) => {
  if(byZip[req.params.zipcode] == undefined)
    res.json("Not Found");
  else
    res.json(byZip[req.params.zipcode]);
 
});


app.get('/city/:cityname', (req, res) => {
  if(byCity[req.params.cityname] == undefined){
    res.send("Not Found");
  }
  else
    res.json(byCity[req.params.cityname]);
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
