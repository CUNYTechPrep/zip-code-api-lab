const express = require('express');
const app = express();
const path = require('path');
const zipApiClient = require('./zip-api/client/zipApiClient');

const PORT = process.env.PORT || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
app.get('/', (req, res) => {
  res.render('dashboard.ejs', {});
});

app.get('/zip', (req, res) => {
  res.render('zip.ejs', {title: 'Zip Code'});
});

app.get('/city', (req, res) => {
  res.render('city.ejs', {title: 'City'});
});

app.get('/zip/:zipcode', (req, res) => {
  zipApiClient.getByZipCode(req.params.zipcode)
      .then(response => {
          console.log(response)
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
