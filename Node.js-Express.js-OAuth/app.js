const express = require('express')
const app = express()

const { Pool }= require('pg')
const pgConf = {
  user: "postgres",
  database: "example",
  password: "postgress",
  host: "db",
  port: "5432",
  max: 10,
  idleTimeoutMillis: 30000
}

const pool = new Pool(pgConf)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000, () => {
  console.log('My REST API running on port 3000')
})