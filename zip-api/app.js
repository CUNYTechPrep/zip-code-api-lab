const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;

//req = request , res = respond
app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});

app.get('/city/:cityname', (req, res) => {
  const zipcode = zipdb.byCity[req.params.cityname]; 
  //request data from api, Params is /zip/{params} in the search bar of the broswer,
  //So when the express sees the get request with /zip/11208 , the 11208 is the params
  // so basically you're using zip.byZip[11208]
  //then store that into the whatever variable in this case zipcode and send it as a json
  // back to the broswer to display
  if(!zipcode){
    res.sendStatus(404);
  }
  res.json({zipcode})
});


app.get('/zip/:zipcode', (req, res) => {
  // fill in...
  const cities = zipdb.byZip[req.params.zipcode]; 
  if(!cities){
    res.sendStatus(404); //respond with 404 if request doesn't exist
  }
  res.json({cities})
});

app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
