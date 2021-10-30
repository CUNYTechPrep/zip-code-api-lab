const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({ test: 'Yay' });
});


app.get('/zip/:zipcode', (req, res) => {
  const {zipcode} = req.params;

  for(property in zipdb.byZip){
    if(zipcode === property){
      res.status(200).send(zipdb.byZip[property]);
    }
  }
  //automatically send not found 
  res.sendStatus(404);
});


app.get('/city/:cityname', (req, res) => {
  const {cityname} = req.params;

  for(property in zipdb.byCity){
    if(cityname === property){
      res.status(200).send(zipdb.byCity[property]);
    }
  }
  //automatically send not found 
  res.sendStatus(404)
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
