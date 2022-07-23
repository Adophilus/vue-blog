const chance = require('chance').Chance()
const Model = require('./Model.js')

class Post extends Model {
  static idBase = 'post:'
  static name = 'Post'
  static unique = ['slug']
  static fields = {
    _id: '',
    _rev: '',
    title: '',
    content: '',
    author: '',
    banner: '',
    datePosted: '',
    slug: '',
    status: 'unpublished'
  }

  static canChange = 'status'

  constructor(
    db,
    { _id, _rev, title, content, author, banner, datePosted, slug, status }
  ) {
    super(db, { _id, _rev })
    this.fields = {
      ...this.fields,
      title,
      content,
      author,
      banner,
      datePosted,
      slug: slug ? slug : title.replace(' ', '_'),
      status: status ? status : 'unpublished'
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
      'datePosted',
      'slug',
      'status'
    ]
  ) {
    return super.get(db, options, raw, fields)
  }

  static generateFields() {
    return {
      title: chance.string(),
      content: chance.paragraph({ sentences: 10 }),
      author: chance.first(),
      banner: 'http://localhost:3000/uploads/dummyimage-720x400.png',
      datePosted: Date.now()
    }
  }
}

module.exports = Post
