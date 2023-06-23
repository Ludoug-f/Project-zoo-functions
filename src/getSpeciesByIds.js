const { species } = require('../data/zoo_data');

function getSpeciesByIds(...id) { // ...id = rest operator
  if (id.length === 0) return []; // se não tiver id, retorna array vazio

  return species.filter((specie) => id.includes(specie.id)); // retorna array com as espécies referentes aos ids
}

module.exports = getSpeciesByIds;
