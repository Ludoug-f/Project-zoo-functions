const { species } = require('../data/zoo_data');

// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

function getSpeciesByIds(...id) {
  if (id.length === 0) return [];

  return species.filter((specie) => id.includes(specie.id));
}

module.exports = getSpeciesByIds;
