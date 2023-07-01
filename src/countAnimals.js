const { species } = require('../data/zoo_data');

// Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }

  const [animalName, animalSex] = Object.values(animal);
  const animalObj = species.find(({ name }) => name === animalName);
  const numberAnimals = animalObj.residents.length;

  if (animalSex) {
    return animalObj.residents.reduce((count, { sex }) => count + (sex === animalSex ? 1 : 0), 0);
  }

  return numberAnimals;
}

module.exports = countAnimals;
