const express = require('express')
const app = express()
const port = 8000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<em>Hello CTP Class Spring 2021!</em>')
})

app.get('/ctp', (req, res) => {
  res.send('You found the CTP page!')
})

app.post('/ctp', (req, res) => {
  const username = req.body.username

  res.json({
    msg: 'This is the /ctp api endpoint',
    data: ['1', 2, { num: 'three' }],
    user: username
  }
  )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})