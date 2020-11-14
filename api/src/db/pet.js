const { nanoid } = require('nanoid')

const createPetModel = (db) => ({
  findMany: (filter) => db.get('pets').filter(filter).value(),
  findOne: (filter) => db.get('pets').find(filter).value(),
  create: (pet) => {
    const newPet = { id: nanoid(), createdAt: Date.now(), ...pet }
    db.get('pets').push(newPet).write()

    return newPet
  },
})

module.exports = createPetModel
