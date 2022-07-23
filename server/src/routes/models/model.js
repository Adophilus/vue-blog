const Model = require('../../models/Model.js')

module.exports = ({ app, db }) => {
  // create Model
  app.put(`/api/${Model.name}`, async (req, res) => {
    let obj = new Model(db, req.query)
    let saved = await obj.save()
    if (saved.ok) {
      res.json(saved)
    } else {
      res.status(400).json(saved)
    }
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
    let saved = await obj.save()
    if (saved.ok) {
      res.json(saved)
    } else {
      res.status(400)
      res.json(saved)
    }
  })

  // delete Model
  app.delete(`/api/${Model.name}/:_id/:_rev`, async (req, res) => {
    let removed = await Model.remove(db, req.params)
    if (removed.ok) {
      res.json(removed)
    } else {
      res.status(400)
      res.json(removed)
    }
  })
}
