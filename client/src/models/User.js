import Model from '@/models/Model.js'

class User extends Model {
  static idBase = 'user:'
  static name = 'User'

  constructor(
    server,
    {
      _id,
      _rev,
      name,
      social,
      username,
      password,
      profilePic,
      fullBodyPic,
      description,
      email
    }
  ) {
    super(server, { _id, _rev })
    this.fields = {
      ...this.fields,
      name,
      social,
      username,
      password,
      profilePic,
      fullBodyPic,
      description,
      email
    }
  }

  static async get(
    server,
    options,
    raw = true,
    fields = [
      '_id',
      '_rev',
      'name',
      'social',
      'username',
      'password',
      'profilePic',
      'fullBodyPic',
      'description',
      'email'
    ]
  ) {
    return super.get(server, options, raw, fields)
  }

  static async login(server, login) {
    try {
      const res = await server.post(`/${this.name}/login`, login)
      return res.data
    } catch (err) {
      return false
    }
  }
}

export default User
