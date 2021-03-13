//Load up Express server
const express = require('express')
const app = express()
const port = 3000


//req - the HTTP request object
//res - the HTTP response object

// app.METHOD(URL_PATH, ROUTE_HADLING_FUNCTION)

//Setup routes for the server
app.get('/', (req, res) => {
  res.send('Welcome to CTP Spring 2021!!!')
})

app.get('/ctp', (req, res) =>{
    res.send('You found the CTP page!')
})

app.post('/ctp', (req, res) =>{
    res.json({
        msg: "This is the response string",
        data: ["1", 2, {num: "Three"}]
    })
})
//Start the server, and listen for client connections
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})