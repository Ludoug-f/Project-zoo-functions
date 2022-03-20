const { employees, species } = require('../data/zoo_data');

function getEmployee(obj) {
  const valor = Object.values(obj); // valor do parametro
  const employee = employees.find((element) => element.firstName === valor[0] // objeto do employee
  || element.lastName === valor[0] || element.id === valor[0]);
  const animalId = employee.responsibleFor; // id animais que e responsavel
  const animalName = animalId.map((element) => species.find((element2) => // nome dos animais
    element2.id === element).name);
  const locations = animalId.map((element) => species.find((element2) => // local dos animais
    element2.id === element).location);
  const result = {
    id: `${employee.id}`,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animalName,
    locations,
  };
  return result;
}

function getEmployeesCoverage(obj) {
  const allEmployees = employees.map((element) => getEmployee({ id: element.id })); // cria array executando a primeira funçao pra cada funcionario
  if (!obj) return allEmployees;
  const valor1 = Object.values(obj); // valor do parametro
  const verifyEmployee = employees.some((element) => element.firstName === valor1[0] // objeto do employee
  || element.lastName === valor1[0] || element.id === valor1[0]);
  if (verifyEmployee === true) {
    return getEmployee(obj);
  } if (verifyEmployee === false) {
    throw new Error('Informações inválidas');
  }
}
module.exports = getEmployeesCoverage;
