const { readdirSync } = require('fs')
const path = require('path')

module.exports = ({ app, db }) => {
  let modelsDir = path.resolve(`${__dirname}/../models`)
  readdirSync(modelsDir).forEach((file) => {
    let model = require(path.join(modelsDir, file))

    // create model
    app.put(`/api/${model.name}`, async (req, res) => {
      let obj = new model(db, req.query)

      res.json(await obj.save())
    })

    // read model
    app.get(`/api/${model.name}`, async (req, res) => {
      res.json(await model.get(db, req.query))
    })

    app.get(`/api/${model.name}/:id`, async (req, res) => {
      res.json(await model.get(db, req.params))
    })

    // update model
    app.post(`/api/${model.name}`, async (req, res) => {
      let obj = new model(db, req.query)
      res.json(await obj.save())
    })

    // delete model
    app.delete(`/api/${model.name}/:_id/:_rev`, async (req, res) => {
      res.json(await model.remove(db, req.params))
    })
  })
}
