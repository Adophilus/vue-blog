import Model from '@/models/Model.js'

class Video extends Model {
  static idBase = 'media:'
  static name = 'Media'

  constructor(server, { _id, _rev, name, url, type }) {
    super(server, { _id, _rev })
    this.fields = {
      ...this.fields,
      name,
      url,
      type
    }
  }

  static async get(
    server,
    options,
    raw = true,
    fields = ['_id', '_rev', 'name', 'url', 'type']
  ) {
    return super.get(server, options, raw, fields)
  }
}

export default Video
