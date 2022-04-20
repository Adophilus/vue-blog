const chance = require('chance').Chance()
const Model = require('./Model.js')

class Post extends Model {
  static idBase = 'post:'
  static name = 'Post'
  static fields = {
    _id: '',
    _rev: '',
    title: '',
    content: '',
    author: '',
    banner: '',
    datePosted: ''
  }

  static canChange = 'content'

  constructor(db, { _id, _rev, title, content, author, banner, datePosted }) {
    super(db, { _id, _rev })
    this.fields = {
      ...this.fields,
      title,
      content,
      author,
      banner,
      datePosted
    }
  }

  static async get(
    db,
    options,
    raw = true,
    fields = [
      '_id',
      '_rev',
      'title',
      'content',
      'author',
      'banner',
      'datePosted'
    ]
  ) {
    return super.get(db, options, raw, fields)
  }

  static generateFields() {
    return {
      title: chance.string(),
      content: chance.paragraph({ sentences: 10 }),
      author: chance.first(),
      banner: 'https://thispersondoesnotexist.com/',
      datePosted: Date.now()
    }
  }
}

module.exports = Post
