const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/test', (req, res) => {
  res.json({ data: 'gyoza' })
})

module.exports = app
