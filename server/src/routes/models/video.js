const Video = require('../../models/Video.js')

module.exports = ({ app, db }) => {
  // create Video
  app.put(`/api/${Video.name}`, async (req, res) => {
    let obj = new Video(db, req.query)

    res.json(await obj.save())
  })

  // read Video
  app.get(`/api/${Video.name}`, async (req, res) => {
    res.json(await Video.get(db, req.query))
  })

  app.get(`/api/${Video.name}/:id`, async (req, res) => {
    res.json(await Video.get(db, req.params))
  })

  // update Video
  app.post(`/api/${Video.name}`, async (req, res) => {
    let obj = new Video(db, req.query)
    res.json(await obj.save())
  })

  // delete Video
  app.delete(`/api/${Video.name}/:_id/:_rev`, async (req, res) => {
    res.json(await Video.remove(db, req.params))
  })
}
