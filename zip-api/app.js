const express = require('express');
const zipdb =   require('./zipData');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static("static"))

app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});

app.get('/zip/:zipcode', async (req, res) => {
  const zipcode = req.params.zipcode
  const cityInfo = zipdb.byZip[zipcode]

  //`<h1>You live in ${zipcodeInfo[0]["City"]}<h1>`
  if(cityInfo){
      res.status(200).send(cityInfo)
  }else{
      res.status(404).send(`<h1>Zipcode: ${zipcode} does not exist</h1>`)
  }
});

app.get('/city/:cityname', async (req, res) => {
  const city = req.params.cityname
  const zipcodes = zipdb.byCity[city.toUpperCase()]

  if(zipcodes){
      res.status(200).send(zipcodes)
  }else{
      res.status(404).send(`<h1>City: ${city} does not exist</h1>`)
  }
});

app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
