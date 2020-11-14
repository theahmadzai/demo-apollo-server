module.exports = {
  Query: {
    pets(_, { input }, ctx) {
      return ctx.models.Pet.findMany(input)
    },
    pet(_, { input }, ctx) {
      return ctx.models.Pet.findOne(input)
    },
  },
  Mutation: {
    newPet(_, { input }, ctx) {
      return ctx.models.Pet.create(input)
    },
  },
  // Pet: {
  //   name(pet) {
  //     console.log(pet)
  //     return 'aadf'
  //   },
  // img(pet) {
  //   return pet.type === 'DOG'
  //     ? 'https://placedog.net/300/300'
  //     : 'http://placekitten.com/300/300'
  // },
  // },
}
