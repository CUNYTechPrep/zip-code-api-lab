const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});

app.get('/zip/:zipcode', (req, res) => {
  let theZip = req.params.zipcode;
  let theObj = zipdb.byZip[theZip];
  
  if(theObj !== undefined){
    res.json(theObj);
  } else{
    res.json("Not a valid zipcode");
  }
});

app.get('/city/:cityname', (req, res) => {
  let theCity = req.params.cityname;
  let theObj = zipdb.byCity[theCity];
  
  if(theObj !== undefined){
    res.json(theObj);
  } else{
    res.json("Not a valid cityname");
  }
});

app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});