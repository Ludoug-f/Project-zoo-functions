const { species } = require('../data/zoo_data');

// Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal).residents.every(
    (resident) => resident.age >= age,
  );
}

module.exports = getAnimalsOlderThan;
