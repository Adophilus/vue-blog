const { readdirSync } = require('fs')
const path = require('path')

module.exports = ({ app, config, db }) => {
  let modelsDir = path.resolve(`${__dirname}/models`)

  readdirSync(modelsDir).forEach((file) => {
    let model = require(path.join(modelsDir, file))

    model({ app, config, db })
  })
}
