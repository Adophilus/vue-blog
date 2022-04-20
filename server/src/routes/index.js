const { readdirSync } = require('fs')
const path = require('path')

module.exports = ({ app, db }) => {
  readdirSync(__dirname)
    .filter((file) => file !== 'index.js')
    .forEach((file) => require(path.join(__dirname, file))({ app, db }))
}
