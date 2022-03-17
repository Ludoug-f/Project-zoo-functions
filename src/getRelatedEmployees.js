const { employees } = require('../data/zoo_data');

function isManager(id) {
  const managerCheck = employees.find((element) => id === 'stephanieId');
  return managerCheck;
}
console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
