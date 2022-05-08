class Model {
  static idBase = 'model:'
  static name = 'Model'
  static unique = []
  isNew = true
  static fields = {}
  static canChange = 'update'

  constructor(db, { _id, _rev }) {
    this.db = db
    this.fields = {}

    if (_id) {
      this.isNew = false
      this.fields._id = _id
      this.fields._rev = _rev
    } else {
      this.fields._id = `${this.constructor.idBase}${this.generateId()}`
    }

    this.__setProps()
  }

  __setProps() {
    // holder for custom `this.fields` props
  }

  static async count(db) {
    return (await this.get(db)).length
  }

  static async get(db, options = {}, raw = true, fields = ['_id', '_rev']) {
    let { id, limit, where } = options
    if (where) {
      if (!(where instanceof Object)) {
        where = JSON.parse(where)
      }
    }

    // GET MODEL BY ID

    if (id) {
      // console.log(`${this.idBase}${id}`)
      let models = await db.find({
        selector: { _id: id },
        fields: fields
      })

      if (raw) {
        return models.docs[0]
      }

      return models.docs.map((model) => new this(db, model))[0]
    }

    if (limit) {
      let models = await db.find({
        selector: { _id: { $regex: this.idBase } },
        fields: fields,
        limit
      })

      if (raw) {
        return models.docs
      }

      return models.docs.map((model) => new this(db, model))[0]
    }

    if (where) {
      let models = await db.find({
        selector: where,
        fields: fields
      })

      if (raw) {
        return models.docs
      }

      return models.docs.map((model) => new this(db, model))
    }

    // GET ALL MODELS

    let models = await db.find({
      selector: { _id: { $regex: this.idBase } },
      fields: fields
    })

    if (raw) {
      return models.docs
    }

    return models.docs.map((model) => new this(db, model))
  }

  generateId() {
    return Date.now()
  }

  get(field) {
    if (field instanceof Array) {
      let fields = {}
      for (let _field in fields) {
        fields[_field] = this.fields[_field]
      }
      return fields
    }

    return this.fields[field]
  }

  set(fields) {
    this.fields = { ...this.fields, ...fields }
    return this
  }

  static remove(db, { _id, _rev }) {
    return db.remove(_id, _rev)
  }

  remove() {
    return this.db.remove(this.fields._id, this.fields._rev)
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

  async __checkUniqueFields() {
    for (let uniqueField of this.constructor.unique) {
      let where = new Object()
      where[uniqueField] = this.fields[uniqueField]
      let models = await this.constructor.get(this.db, { where })
      let model = models[0]

      if (model && model._id !== this.fields._id) {
        return {
          ok: false,
          error: `A ${this.constructor.name} with a matching ${uniqueField} already exists!`
        }
      }
    }

    return {
      ok: true
    }
  }

  async save() {
    let returnValue
    let checkUniqueFields = await this.__checkUniqueFields()

    if (!checkUniqueFields.ok) {
      return checkUniqueFields
    }

    if (this.isNew) {
      returnValue = await this.db.put(this.fields)
    } else {
      returnValue = await this.db.put(this.fields)
    }

    this.fields._rev = returnValue.rev
    this.isNew = false
    return returnValue
  }

  static generateFields() {
    return {}
  }
}

module.exports = Model
