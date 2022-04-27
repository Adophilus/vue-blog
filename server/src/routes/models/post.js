const Post = require('../../models/Post.js')

module.exports = ({ app, db }) => {
  // create Post
  app.put(`/api/${Post.name}`, async (req, res) => {
    let obj = new Post(db, req.query)

    res.json(await obj.save())
  })

  // read Post
  app.get(`/api/${Post.name}`, async (req, res) => {
    res.json(await Post.get(db, req.query))
  })

  app.get(`/api/${Post.name}/:id`, async (req, res) => {
    res.json(await Post.get(db, req.params))
  })

  // update Post
  app.post(`/api/${Post.name}`, async (req, res) => {
    let obj = new Post(db, req.query)
    res.json(await obj.save())
  })

  // delete Post
  app.delete(`/api/${Post.name}/:_id/:_rev`, async (req, res) => {
    res.json(await Post.remove(db, req.params))
  })
}
