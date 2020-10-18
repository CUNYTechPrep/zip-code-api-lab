const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
    res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {

    let zipcode = zipdb.byZip[req.params.zipcode]

    if(zipcode !== undefined){
        res.json(zipcode)
    }
    else{
        res.sendStatus(404);
    }
});


app.get('/city/:cityname', (req, res) => {
    let cityname = zipdb.byCity[req.params.cityname]

    if(cityname !== undefined){
        res.json(cityname)
    }
    else{
        res.sendStatus(404);
    }});


app.listen(PORT, () => {
    console.log(`zip-api is up and running on ${PORT}`);
});
