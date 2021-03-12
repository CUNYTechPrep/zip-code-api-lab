//Here we load up the Express server
const express = require('express')
const app = express()
const port = 3000
// for backend we usually use 8080 or 8000 for backend

// req = the HTTP request object
// res = the HTTP response object


// The pseudocode for our app HTTP request is the following pattern:
//          app.METHOD(URL_PATH, ROUTE_HANDLING_FUNCTION)


// Setup routes for the server
// This is where we write the bulk of our code.
app.get('/', (req, res) => {
  res.send('Hello CTP CTP Class!')
})

app.get('/ctp', (req, res) => {
    res.send('You found the /ctp page!')
})

//This is the clue for the Homework (1 way to do this)
//app.get('zip/:zipCode', (res, req) => {

//The other two ways, check the notes under 3/12

app.post('/ctp', (req, res) => {
   // res.send('You POSTed to the /ctp page!')
   res.status(201).json({
       msg: "This is the response string",
       data: ["1", 2, {num:  'Three'  }] //object contains two keys, message and data
   }) //allows me to send JS object as data
})


// Start the server, and listen for client connections
// This is the final requirement needed to run the Node.js
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})