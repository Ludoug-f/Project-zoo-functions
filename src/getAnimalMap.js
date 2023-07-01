const data = require('../data/zoo_data');

// A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e sexo.

function getAnimalMap(options = {}) {
  const animalMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach((animal) => {
    if (options.includeNames) {
      const residents = animal.residents
        .filter((resident) => !options.sex || resident.sex === options.sex)
        .map((resident) => resident.name);
      if (options.sorted) residents.sort();
      animalMap[animal.location].push({ [animal.name]: residents });
    } else {
      animalMap[animal.location].push(animal.name);
    }
  });
  return animalMap;
}

module.exports = getAnimalMap;
