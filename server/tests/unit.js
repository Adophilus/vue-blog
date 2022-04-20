const path = require('path')
const { readdirSync } = require('fs')
const chance = require('chance').Chance()
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert
chai.use(require('chai-http'))

const server = chai.request(require('../src/app').app).keepOpen()

describe('Models', () => {
  let modelsDir = path.resolve(`${__dirname}/../src/models`)
  let models = readdirSync(modelsDir).forEach((file) => {
    let model = require(path.join(modelsDir, file))
    let fields = model.generateFields()

    describe(model.name, () => {
      let _model

      it(`Should check if a ${model.name} can be created`, (done) => {
        server
          .put(`/api/${model.name}`)
          .query(fields)
          .end((err, res) => {
            expect(err).to.be.null

            let json = JSON.parse(res.text)

            expect(json.ok).to.be.true

            _model = { _id: json.id, _rev: json.rev }

            done()
          })
      })

      it(`Should check if a ${model.name} can be fetched`, (done) => {
        server.get(`/api/${model.name}/${_model._id}`).end((err, res) => {
          expect(err).to.be.null

          let json = JSON.parse(res.text)

          for (let prop in model.fields) {
            expect(json).to.have.property(prop)
          }

          _model = json

          done()
        })
      })

      it(`Should check if a ${model.name} can be updated`, (done) => {
        _model[model.canChange] = 'updated'

        server
          .post(`/api/${model.name}`)
          .query(_model)
          .end((err, res) => {
            expect(err).to.be.null

            let json = JSON.parse(res.text)

            expect(json.ok).to.be.true

            _model = { _id: json.id, _rev: json.rev }

            done()
          })
      })

      it(`Should check if a ${model.name} can be deleted`, (done) => {
        server
          .delete(`/api/${model.name}/${_model._id}/${_model._rev}`)
          .end((err, res) => {
            expect(err).to.be.null

            let json = JSON.parse(res.text)

            expect(json.ok).to.be.true

            done()
          })
      })
    })
  })
})
