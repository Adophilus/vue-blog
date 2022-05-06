// import { SaveFailError } from "@/models/Exceptions.js"

class Model {
  static idBase = 'model:'
  static name = 'Model'
  isNew = true

  constructor(server, { _id, _rev }) {
    this.server = server
    this.fields = {
      _id: this.idBase
    }

    if (_id) {
      this.isNew = false
      this.fields._id = _id
      this.fields._rev = _rev
    }

    this.__setProps()
  }

  __setProps() {
    // holder for custom `this.fields` props
  }

  static async count(server) {
    return (await this.get(server)).length
  }

  static async get(server, options = {}, raw = true, fields = ['_id', '_rev']) {
    const { id, limit, where } = options
    options = { fields, ...options }

    // GET MODEL BY ID

    if (id) {
      let model = (await server.get(`/${this.name}/${id}`, { params: options }))
        .data

      if (raw) {
        return model
      }

      return new this(server, model)
    }

    if (limit) {
      let models = (await server.get(`/${this.name}`, { params: options })).data

      if (raw) {
        return models.docs
      }

      return models.docs.map((model) => new this(server, model))
    }

    if (where) {
      let models = (await server.get(`/${this.name}`, { params: options })).data

      if (raw) {
        return models
      }

      return models.docs.map((model) => new this(server, model))
    }

    // GET ALL MODELS

    let models = (await server.get(`/${this.name}`)).data

    if (raw) {
      return models
    }

    return models.docs.map((model) => new this(server, model))
  }

  set(fields) {
    this.fields = { ...this.fields, ...fields }
    return this
  }

  static remove(server, { _id }) {
    return server.delete(`${this.name}/${_id}`)
  }

  remove() {
    return this.server.delete(`${this.name}/${this.fields._id}`)
  }

  static split(id) {
    return id.split(this.idBase)[1]
  }

  static is(model) {
    if (model instanceof this) {
      return model.fields._id.startsWith(this.idBase)
    } else if (typeof model === 'string') {
      return model.startsWith(this.idBase)
    } else {
      return model._id.startsWith(this.idBase)
    }
  }

  async save() {
    let res

    if (this.isNew) {
      res = await this.server.put(this.constructor.name, this.fields)
    } else {
      res = await this.server.post(this.constructor.name, this.fields)
    }
    return res.data
  }
}

export default Model
