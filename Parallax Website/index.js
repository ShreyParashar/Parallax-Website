const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get(`/hello/:name`, (req, res) => {
  res.send('hello World!'+ req.params.name)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  // res.send('Hello About!')
  res.sendFile(path.join(__dirname, 'parallax website.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})