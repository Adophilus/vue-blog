const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const PouchDB = require('pouchdb')
const config = require('../.env')

PouchDB.plugin(require('pouchdb-find'))

const app = express()
const db = new PouchDB(config.db)

app.use(bodyParser.json())
app.use(cors())
app.use(fileUpload())
app.use('/uploads', express.static('uploads'))

require('./routes')({ app, db, config })

app.get('/', (req, res) => res.json({}))

module.exports = {
  app,
  db,
  config
}
