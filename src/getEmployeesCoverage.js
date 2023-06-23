const { employees, species } = require('../data/zoo_data');

function getEmployee(obj) {
  const identifier = Object.values(obj)[0];
  try {
    const employee = employees.find((element) =>
      element.firstName === identifier
    || element.lastName === identifier
    || element.id === identifier);
    const { id, firstName, lastName, responsibleFor } = employee;
    const fullName = `${firstName} ${lastName}`;
    return { id, fullName, responsibleFor };
  } catch (error) {
    throw new Error('Informações inválidas');
  }
}

function getAnimals(obj) {
  const { responsibleFor } = getEmployee(obj);
  const animals = responsibleFor.map((animalId) =>
    species.find((element) => element.id === animalId).name);
  return animals;
}

function getLocations(obj) {
  const { responsibleFor } = getEmployee(obj);
  const locations = responsibleFor.map((animalId) =>
    species.find((element) => element.id === animalId).location);
  return locations;
}

function getEmployeesCoverage(obj) {
  if (!obj) {
    const employeesCoverage = employees.map((employee) => {
      const { id, firstName, lastName } = employee;
      const fullName = `${firstName} ${lastName}`;
      const animals = getAnimals({ id });
      const locations = getLocations({ id });
      return { id, fullName, species: animals, locations };
    });
    return employeesCoverage;
  }

  const { id, fullName } = getEmployee(obj);
  const animals = getAnimals(obj);
  const locations = getLocations(obj);
  return { id, fullName, species: animals, locations };
}

module.exports = getEmployeesCoverage;
