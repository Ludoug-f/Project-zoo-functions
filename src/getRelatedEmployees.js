const { employees } = require('../data/zoo_data');

function isManager(id) {
  const managerCheck = employees.some((element) => element.managers.includes(id));
  return managerCheck;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const colab = employees.filter((element) => element.managers.includes(managerId));
  const result = colab.map((element) => `${element.firstName} ${element.lastName}`);
  return result;
}
module.exports = { isManager, getRelatedEmployees };
