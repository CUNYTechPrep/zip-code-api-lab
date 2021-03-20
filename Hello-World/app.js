
const express = require('express')
const app = express()
const port = 3000

// req - the HTTP request object 
// res - the HTTP response object 

//app.NETHOD(URL_PATH, FUNCTION_ROUTE_HANDLER)

//Setup routes for the server
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Ctp Spring 2021</h1>')
})

app.get('/ctp', (req, res) => {
    res.send('You found the /ctp page !')
})

app.post('/ctp', (req, res) => {
    res.status(201).json({
        msg: "this is the response string",
        data: ["1", 2, {num: 'Three'}]
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})