const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;

app.use(express.json());

// console.log(zipdb.byZip);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});

// Enter desired zipcode
// Returns JSON response with an array containing an object for each city found
app.get('/zip/:zipcode', (req, res) => {

  // Save the zipcode parameter
  zip = req.params.zipcode;

  // Validate zipcode parameter is alphanumeric
  if (!zip.match(/^[0-9a-z+$]/)) {
    res.status(404);
    res.send("Not Found");
  }

  // Empty byZip and create the response array
  zipdb.resetZipcodeData();
  zipdb.getZipcodeData(zip);

  // Check if there is a response to return
  // If there is, return the JSON response
  // If there isn't, return a 404 Error
  if (zipdb.byZip.length !== 0) {
    res.json(zipdb.byZip);
  } else {
    res.status(404);
    res.send("Not Found");
  }
});

// Enter desired city
// Returns JSON response with an array containing all zipcodes found
app.get('/city/:cityname', (req, res) => {

  // Convert the city parameter to all uppercase and save it
  city = req.params.cityname.toUpperCase();

  // Empty byCity and create the response array
  zipdb.resetCityData();
  zipdb.getCityData(city);

  // Check if there is a response to return
  // If there is, return the JSON response
  // If there isn't, return a 404 Error
  if (zipdb.byCity.length !== 0) {
    res.json(zipdb.byCity);
  } else {
    res.status(404);
    res.send("Not Found");
  }
});

// app.get('/test', (req, res) => {
//   res.status(404);
//   res.send("This is a test");
// });

app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
