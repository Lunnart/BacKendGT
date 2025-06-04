const express = require('express');
const cartRoute = require('./src/routes/cartRoute.js')

const app = express()
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/carrinho', cartRoute)

app.listen(port, () => {
  console.log(`App rodando no link http://localhost:${port}`)
})

