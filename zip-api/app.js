const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zip = req.params.zipcode;
  // handle zip...
  console.log(zipdb.byZip[zip]);
  if(zip in zipdb.byZip){
    res.send(
      zipdb.byZip[zip]
    )
  } else {
    res.send('Not found')
  }
});


app.get('/city/:cityname', (req, res) => {
  let city = req.params.cityname;
  //handle city...
  console.log(zipdb.byCity[city]);
  if(city in zipdb.byCity){
    res.send(
      zipdb.byCity[city]
    )
  } else {
    res.send('Not found')
  }
});

app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
