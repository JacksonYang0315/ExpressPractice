const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const userRouter = require('./routes/users')
const {sequelize} = require('./models')
const config = require('./config/config')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use('/',userRouter)

sequelize.sync({
    force: false
  })
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })