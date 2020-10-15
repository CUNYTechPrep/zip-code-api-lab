const express = require('express');
const app = express();
const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;

//zip code api
app.get('/zip/:zipcode', (req, res) => {

  const zipcode = zipdb.byZip[parseInt(req.params.zipcode)];

  if(zipcode != undefined){
    res.json(zipcode);
  }
  else{
    res.status(400).json({msg: `Zipcode ${zipcode} not found!`})
  }
  
});


app.get('/city/:cityname', (req, res) => {

  const cityname = zipdb.byCity[req.params.cityname.toUpperCase()];

  if(cityname != undefined){
    res.json(cityname);
  }
  else{
    res.status(400).json({msg: `City ${cityname} not found!`})
  }

});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
