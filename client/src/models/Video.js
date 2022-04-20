import Model from '@/models/Model.js'

class Video extends Model {
  static idBase = 'video:'
  static name = 'Video'

  constructor(server, { _id, _rev, title, url, banner }) {
    super(server, { _id, _rev })
    this.fields = {
      ...this.fields,
      title,
      url,
      banner
    }
  }

  static async get(
    server,
    options,
    raw = true,
    fields = ['_id', '_rev', 'title', 'url', 'banner']
  ) {
    return super.get(server, options, raw, fields)
  }
}

export default Video
