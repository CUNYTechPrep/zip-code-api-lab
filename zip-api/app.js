const { response } = require('express');
const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);
function query(search_key, field, res){
  let found = null;
  const fs = require('fs');
  const papa = require('papaparse');
  const file = fs.createReadStream('./data/free-zipcode-database.csv');
  console.log('searching for: ', search_key)
  papa.parse(file, {
    worker: true,
    header: true, 
    step: function(result, parser) {
      if (result['data'][field] === search_key){
          console.log('found record:', result['data'])
          res.send(result['data']);
          parser.abort();
        }
    },
    complete: function(results, file) {
      console.log(results);
      res.send('Not Found')
    }
  });
}


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  query(req.params['zipcode'], "Zipcode", res);  
});


app.get('/city/:cityname', (req, res) => {
  query(req.params['cityname'], "City", res);
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});



