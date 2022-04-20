const chance = require('chance').Chance()
const Model = require('./Model.js')

class Video extends Model {
  static idBase = 'video:'
  static name = 'Video'
  static fields = {
    title: '',
    url: '',
    banner: ''
  }
  static canChange = 'title'

  constructor(db, { _id, _rev, title, url, banner }) {
    super(db, { _id, _rev })
    this.fields = {
      ...this.fields,
      title,
      url,
      banner
    }
  }

  static async get(
    db,
    options,
    raw = true,
    fields = ['_id', '_rev', 'title', 'url', 'banner']
  ) {
    return super.get(db, options, raw, fields)
  }

  static generateFields() {
    return {
      title: chance.sentence(),
      url: 'https://155vod-adaptive.akamaized.net/exp=1650470514~acl=%2F231b480f-6666-49ed-97f4-9e2bf1ba4c02%2F%2A~hmac=fe087db7515b280685fcfb85e7bb6c6ea7fc38a0b85b7b71ffb055911be568f4/231b480f-6666-49ed-97f4-9e2bf1ba4c02/sep/video/728788d2/chop/segment-4.m4s',
      banner:
        'https://images.pexels.com/photos/1517358/pexels-photo-1517358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  }
}

module.exports = Video
