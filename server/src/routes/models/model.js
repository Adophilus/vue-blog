const Model = require('../../models/Model.js')

module.exports = ({ app, db }) => {
  // create Model
  app.put(`/api/${Model.name}`, async (req, res) => {
    let obj = new Model(db, req.query)

    res.json(await obj.save())
  })

  // read Model
  app.get(`/api/${Model.name}`, async (req, res) => {
    res.json(await Model.get(db, req.query))
  })

  app.get(`/api/${Model.name}/:id`, async (req, res) => {
    res.json(await Model.get(db, req.params))
  })

  // update Model
  app.post(`/api/${Model.name}`, async (req, res) => {
    let obj = new Model(db, req.query)
    res.json(await obj.save())
  })

  // delete Model
  app.delete(`/api/${Model.name}/:_id/:_rev`, async (req, res) => {
    res.json(await Model.remove(db, req.params))
  })
}
