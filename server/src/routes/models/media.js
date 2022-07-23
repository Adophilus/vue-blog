const path = require('path')
const Media = require('../../models/Media.js')
const { writeFileSync } = require('fs')

module.exports = ({ app, db }) => {
  // upload Media
  app.put(`/api/${Media.name}`, async (req, res) => {
    const { file } = req.body
    let filename

    let obj = new Media(db, req.body)
    let saved = await obj.save()

    if (!saved.ok) {
      return res.status(400).json(saved)
    }

    filename = `${saved.id.replace(':', '_')}${path.extname(req.body.name)}`

    writeFileSync(path.join('uploads', filename), atob(file))
  })

  // read Media
  app.get(`/api/${Media.name}`, async (req, res) => {
    res.json(await Media.get(db, req.query))
  })

  app.get(`/api/${Media.name}/:id`, async (req, res) => {
    res.json(await Media.get(db, req.params))
  })

  // update Media
  app.post(`/api/${Media.name}`, async (req, res) => {
    let obj = new Media(db, req.query)
    let saved = await obj.save()
    if (saved.ok) {
      res.json(saved)
    } else {
      res.status(400).json(saved)
    }
  })

  // delete Media
  app.delete(`/api/${Media.name}/:_id/:_rev`, async (req, res) => {
    let removed = await Media.remove(db, req.params)
    if (removed.ok) {
      res.json(removed)
    } else {
      res.status(400).json(removed)
    }
  })
}
