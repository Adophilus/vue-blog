const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const PouchDB = require('pouchdb')
const Chance = require('chance')
const config = require('./.env')

PouchDB.plugin(require('pouchdb-find'))

const app = express()
const db = new PouchDB(config.db)

// app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')({ app, db, config })

app.get('/', (req, res) => res.json({}))

module.exports = {
  app,
  db,
  config,
  chance: new Chance()
}
