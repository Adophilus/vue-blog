import Model from '@/models/Model.js'

class Post extends Model {
  static idBase = 'post:'
  static name = 'Post'

  constructor(
    server,
    { _id, _rev, title, content, author, banner, datePosted, slug, status }
  ) {
    super(server, { _id, _rev })
    this.fields = {
      ...this.fields,
      title,
      content,
      author,
      banner,
      datePosted,
      slug,
      status
    }
  }

  static async get(
    server,
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
    return super.get(server, options, raw, fields)
  }
}

export default Post
