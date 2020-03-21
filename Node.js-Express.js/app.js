const express = require('express')
const app = express()

// setup view engin
app.set('view engine', 'pug')


app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000, () => {
  console.log('SERVER running on port 3000')
})