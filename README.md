# Zip Code API  🔥

## the Zip API service

The Zip Code API , when called, returns a json object with information regarding the specified zipcode or city.

![Demo](https://i.imgur.com/R9qOpqR.gif)


Example of how to call the API  
```
http://ctp-zip-api.herokuapp.com/zip/42069 
```
or if you want to run locally after cloning this repo

```
http://localhost:8000/zip/42069
```
Output :
```
[{
"RecordNumber":"23208",
"Zipcode":"42069",
"ZipCodeType":"STANDARD",
"City":"MELBER",
"State":"KY",
"LocationType":"PRIMARY",
"Lat":"36.91",
"Long":"-88.75",
"Xaxis":"0.01",
"Yaxis":"-0.79",
"Zaxis":"0.60",
"WorldRegion":"NA",
"Country":"US",
"LocationText":"Melber, KY",
"Location":"NA-US-KY-MELBER",
"Decommisioned":"false",
"TaxReturnsFiled":"421",
"EstimatedPopulation":"807",
"TotalWages":"10888387",
"Notes":""
}]
```


> Note: http://ctp-zip-api.herokuapp.com/ is the URL for the API to be used in your app. 

> To run the program on your local device, clone this repo and : 

- `cd zip-api`
- `npm install`
-  read the code for the `/zip` and `/city` routes to understand how the API calls and responses are being made
- `npm start` to start dev server
- Visit:
    + http://localhost:8000/
    + http://localhost:8000/zip/10016
    + http://localhost:8000/city/SPRINGFIELD
