const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((emp) => emp.id === id);
  const firstSpeciesId = employee.responsibleFor[0];
  const firstSpecies = species.find((specie) => specie.id === firstSpeciesId);
  const oldestAnimal = firstSpecies.residents.reduce((acc, curr) => {
    if (acc.age < curr.age) {
      return curr;
    }
    return acc;
  });

  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
