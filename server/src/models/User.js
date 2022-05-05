const chance = require('chance').Chance()
const SHA256 = require('crypto-js/sha256')
const Model = require('./Model.js')

class User extends Model {
  static idBase = 'user:'
  static name = 'User'
  static unique = ['username', 'email']
  static fields = {
    name: '',
    social: '',
    username: '',
    password: '',
    profilePic: '',
    fullBodyPic: '',
    description: '',
    email: ''
  }
  static canChange = 'description'

  constructor(
    db,
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
    super(db, { _id, _rev })
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
    db,
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
    return super.get(db, options, raw, fields)
  }

  static async encryptPassword(password) {
    return SHA256(password).toString()
  }

  async hasPassword(password) {
    return (
      (await this.constructor.encryptPassword(password)) ===
      this.fields.password
    )
  }

  async updatePassword(password) {
    this.fields.password = await this.constructor.encryptPassword(password)
    return this.save()
  }

  async save() {
    if (this.isNew) {
      this.fields.password = await this.constructor.encryptPassword(
        this.fields.password
      )
    }

    return super.save()
  }

  static generateFields() {
    return {
      name: chance.name(),
      social: [{ twitter: chance.url({ domain: 'https://twitter.com' }) }],
      username: chance.string(),
      password: chance.string(),
      profilePic: 'https://thispersondoesnotexist.com/',
      fullBodyPic: 'https://thispersondoesnotexist.com/',
      description: chance.paragraph({ sentences: 10 }),
      email: chance.email({ domain: 'dev.lan' })
    }
  }
}

module.exports = User
