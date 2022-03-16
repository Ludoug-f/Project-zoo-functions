const { species } = require('../data/zoo_data');

function getSpeciesByIds(...id) {
  if (!id) return [];

  const animals = species.filter((element) => id.includes(element.id));
  return animals;
}
module.exports = getSpeciesByIds;
