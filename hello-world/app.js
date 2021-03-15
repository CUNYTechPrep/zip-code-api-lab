// Load up the Express server
const express = require('express')
const app = express()
const port = 3000


// req - the HTTP request object, client sending data to server
// res - the HTTP response object, server sending data to client


// app.METHOD(URL_PATH, FUNCTION_ROUTE_HANDLER)

// Setup routes for the server
app.get('/', (req, res) => {
  res.send('Welcome to CTP Spring 2021!!!!!')
})

app.get('/ctp', (req, res) => {
    res.send('You found the /ctp page!')
})

app.post('/ctp', (req, res) => {
    // res.send('You POSTed to the /ctp page!')

    res.status(201).json({
        msg: "This is the response string",
        data: ["1", 2, { num: 'Three' }]
    })
})


// Start the server, and listen for client connections
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})