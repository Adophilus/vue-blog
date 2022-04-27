const { readdirSync } = require('fs')
const path = require('path')

module.exports = ({ app, config, db }) => {
  readdirSync(__dirname)
    .filter((file) => file.endsWith('.js') && file !== 'index.js')
    .forEach((file) => require(path.join(__dirname, file))({ app, config, db }))
}
