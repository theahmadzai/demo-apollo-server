const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./db.json')
const db = low(adapter)

db.defaults({ user: {}, pets: [] }).write()

const createPetModel = require('./pet')
const createUserModel = require('./user')

const models = {
  Pet: createPetModel(db),
  User: createUserModel(db),
}

module.exports = {
  models,
  db,
}
