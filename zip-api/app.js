const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;



app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zip = req.params.zipcode

  if(zipdb.byZip[zip] === undefined){
    res.status(400).send("Error 404 zipcode not found")
  }else {
    res.json(zipdb.byZip[zip])
  }
  
});


app.get('/city/:cityname', (req, res) => {
  let cityName = req.params.cityname.toUpperCase();

  if(zipdb.byCity[cityName] === undefined){
    res.status(404).send('Error 404 City not found')
  }else{ 
    res.json(zipdb.byCity[cityName])
  }
});

app.get('/search', (req, res) =>{  // '/search?decom=true&state=ny&city=brooklyn' example query param

  const isDecommisioned = req.query.decom
  const state = req.query.state
  const city = req.query.city

  const filterByQ_Param = (rec) => {
    if(isDecommisioned && state && city){
    if(rec['Decommisioned'] === isDecommisioned && rec['State'] === state.toUpperCase() && rec['City'] === city.toUpperCase()){
      return true
    }else {
      return false 
    }
  } else if(isDecommisioned && state){
    if(rec['Decommisioned'] === isDecommisioned && rec['State'] === state.toUpperCase()){
      return true
    }else {
      return false
    }
  } else if(isDecommisioned && city){
    if(rec['Decommisioned'] === isDecommisioned && rec['City'] === city.toUpperCase()){
      return true 
    } else {
      return false
    }
  }
  }

  let arr = zipdb.records.filter(filterByQ_Param)

  res.json(arr)

})


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
