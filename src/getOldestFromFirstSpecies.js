const { data, employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees.find((element) => element.id === (id)); // objeto do employee
  const findAnimal = findEmployee.responsibleFor[0]; // string primeiro animal
  const objAnimal = species.find((element) => element.id === findAnimal); // objeto primeiro animal
  const oldestAnimal = objAnimal.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldestAnimal[0]);
}

module.exports = getOldestFromFirstSpecies;
