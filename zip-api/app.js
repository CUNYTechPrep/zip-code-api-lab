const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  // fill in...
  const zip = req.params.zipcode;
  console.log(zip);
  let results = zipdb.byZip[zip];
  if(! (results === undefined)){  
    res.json(results);
  }
  else{
    res.writeHead(404, {"Content-Type":"text/html"});
    res.end('<h1>404 Not Found<h1>');
  }
});


app.get('/city/:cityname', (req, res) => {
  // fill in...
  const city = req.params.cityname;
  console.log(city);
  let results = zipdb.byCity[city];
  if(! (results === undefined)){  
    res.json(results);
  }
  else{
    res.writeHead(404, {"Content-Type":"text/html"});
    res.end('<h1>404 Not Found<h1>');
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});

