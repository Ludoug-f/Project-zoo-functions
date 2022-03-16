const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const verifyAnimal = species.find((element) => element.name === animal);
  const { residents } = verifyAnimal;
  const verifyAge = residents.every((verify) => verify.age >= age);
  return verifyAge;
}

module.exports = getAnimalsOlderThan;
