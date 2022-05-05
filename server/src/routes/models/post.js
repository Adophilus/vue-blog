const Post = require('../../models/Post.js')

module.exports = ({ app, db }) => {
  // create Post
  app.put(`/api/${Post.name}`, async (req, res) => {
    let obj = new Post(db, req.body)
    let saved = await obj.save()
    if (saved.ok) {
      res.json(saved)
    } else {
      res.status(400)
      res.json(saved)
    }
    res.json(await obj.save())
  })

  // read Post
  app.get(`/api/${Post.name}`, async (req, res) => {
    let post = await await Post.get(db, req.query)
    res.json(post)
  })

  app.get(`/api/${Post.name}/:id`, async (req, res) => {
    res.json(await Post.get(db, req.params))
  })

  // update Post
  app.post(`/api/${Post.name}`, async (req, res) => {
    let obj = new Post(db, req.body)
    let saved = await obj.save()
    if (saved.ok) {
      res.json(saved)
    } else {
      res.status(400)
      res.json(saved)
    }
  })

  // delete Post
  app.delete(`/api/${Post.name}/:_id/:_rev`, async (req, res) => {
    let removed = await Post.remove(db, req.params)
    if (removed.ok) {
      res.json(removed)
    } else {
      res.status(400)
      res.json(removed)
    }
    res.json(await removed)
  })
}
