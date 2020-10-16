const express = require('express');
const app = express();
const zipApiClient = require('./client/zipApiClient');

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  zipApiClient.getByZipCode(req.params.zipcode)
      .then(response => {
          res.send(response.data);
      }).catch((err) =>{
      res.status(err.response.status).send(err.response.data)
  })
});

app.get('/city/:cityname', (req, res) => {
  zipApiClient.getByCityName(req.params.cityname)
      .then(response => {
        res.send(response.data);
      }).catch((err) =>{
      res.status(err.response.status).send(err.response.data)
  })
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
