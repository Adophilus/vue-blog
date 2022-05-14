const chance = require('chance').Chance()
const path = require('path')
const Model = require('./Model.js')
const { host, port } = require('../config.js').server

class Media extends Model {
  static idBase = 'media:'
  static name = 'Media'
  static fields = {
    name: '',
    url: '',
    type: ''
  }
  static canChange = 'name'

  constructor(db, { _id, _rev, name, url, type }) {
    super(db, { _id, _rev })
    this.fields = {
      ...this.fields,
      name,
      url,
      type
    }
  }

  static async get(
    db,
    options,
    raw = true,
    fields = ['_id', '_rev', 'name', 'url', 'type']
  ) {
    return super.get(db, options, raw, fields)
  }

  static generateFields() {
    return {
      name: chance.sentence(),
      url: 'https://155vod-adaptive.akamaized.net/exp=1650470514~acl=%2F231b480f-6666-49ed-97f4-9e2bf1ba4c02%2F%2A~hmac=fe087db7515b280685fcfb85e7bb6c6ea7fc38a0b85b7b71ffb055911be568f4/231b480f-6666-49ed-97f4-9e2bf1ba4c02/sep/video/728788d2/chop/segment-4.m4s',
      type: 'video/mp4'
    }
  }

  save() {
    if (this.isNew) {
      this.fields.url = `http://${host}:${port}/uploads/${this.fields._id.replace(
        ':',
        '_'
      )}${path.extname(this.fields.name)}`
    }

    return super.save()
  }
}

module.exports = Media
