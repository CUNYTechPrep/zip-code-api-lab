const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


//console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {

  let zipcode = req.params.zipcode;

  console.log(zipdb.byZip[zipcode]);

  if(zipcode in zipdb.byZip){

    res.send(

      zipdb.byZip[zipcode]
      
    )

  } else {

    res.send('Not found')

  }

});


app.get('/city/:cityname', (req, res) => {

  let cityname = req.params.cityname;

  console.log(zipdb.byCity[cityname]);

  if(cityname in zipdb.byCity){

    res.send(

      zipdb.byCity[cityname]
      
    )

  } else {

    res.send('Not found')

  }

});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
