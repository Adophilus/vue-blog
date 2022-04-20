const { app } = require('./app')

app.listen(config.port, (err) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log(`Server running on port ${config.port}...`)
  }
})
