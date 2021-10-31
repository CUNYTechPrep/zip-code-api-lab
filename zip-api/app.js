const express = require("express");
const app = express();
// imports csv in the data folder
const zipdb = require("./zipData");

const PORT = process.env.PORT || 8000;

// console.log(zipdb.byCity);

app.get("/", (req, res) => {
	res.json({ test: "Yay" });
});

app.get("/zip/:zipcode", (req, res) => {
	res.send(zipdb.byZip[req.params.zipcode]);
});

app.get("/city/:cityname", (req, res) => {
	res.send(zipdb.byCity[req.params.cityname]);
});
// the keys are upper case like BROOKLYN

app.listen(PORT, () => {
	console.log(`zip-api is up and running on ${PORT}`);
});
