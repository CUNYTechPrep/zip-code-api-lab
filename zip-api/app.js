const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// setup route handler
// app.get(urlPath, routeHandlerFunction);
// app.post(...);
// app.put();
// app.delete();


// console.log(zipdb.byCity);

// route handler
app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});

app.get('/zip/:zipcode', (req, res) => {
  let zip = zipdb.byZip[req.params.zipcode];
  res.json(zip)

   // res.json(req.params.zipcode).find().then(( (res) =>{

  //   zipdb;
  // }));

    // fetch(this.url + event.target.value)
    //   .then((response) => response.json())
    //   .then((jsonData) => {
    //     console.log(jsonData);
    //     this.setState({
    //       userResultArray: jsonData,
    //                 // Update State

    //     });

    
  // res.map(req.params.zipcode);
  // res.render(zipdb);
  // res.find(req.params.zipcode).then(req.json(zipdb));
});


app.get('/city/:cityname', (req, res) => {
  let city = zipdb.byCity[req.params.cityname.toUpperCase()];
  res.json(city)
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});