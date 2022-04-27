const User = require('../../models/User.js')
const jwt = require('jsonwebtoken')

module.exports = ({ app, config, db }) => {
  // create User
  app.put(`/api/${User.name}`, async (req, res) => {
    let obj = new User(db, req.query)

    res.json(await obj.save())
  })

  // read User
  app.get(`/api/${User.name}`, async (req, res) => {
    res.json(await User.get(db, req.query))
  })

  app.get(`/api/${User.name}/:id`, async (req, res) => {
    res.json(await User.get(db, req.params))
  })

  // update User
  app.post(`/api/${User.name}`, async (req, res) => {
    let obj = new User(db, req.query)
    res.json(await obj.save())
  })

  // delete User
  app.delete(`/api/${User.name}/:_id/:_rev`, async (req, res) => {
    res.json(await User.remove(db, req.params))
  })

  // login User
  app.post(`/api/${User.name}/login`, async (req, res) => {
    const { username, password } = req.body
    const userJson = (await User.get(db, { where: { username } }))[0]
    if (userJson) {
      const user = new User(db, userJson)

      if (await user.hasPassword(password)) {
        userJson.token = jwt.sign({ id: user.get('_id') }, config.token.key, {
          expiresIn: '20h'
        })

        return res.json(userJson)
      }
    }

    res.status(400).json({ message: 'Incorrect username or password' })
  })
}
