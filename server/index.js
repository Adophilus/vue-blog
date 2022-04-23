const morgan = require('morgan')
const { app, config } = require('./src/app')

app.use(morgan('combined'))

app.listen(config.port, (err) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log(`Server running on port ${config.port}...`)
  }
})
