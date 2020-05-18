const express = require('express')
const getProducts = require('./getProducts')

const app = express()
const SERVER_PORT  = 4000

app.use(express.json())

app.get('/api/products', getProducts.getAllProducts)

app.get('/api/products/:id', getProducts.getProductById)

app.listen(SERVER_PORT, () => {
  console.log(`Server is running ${SERVER_PORT}`)
})