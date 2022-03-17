const { employees } = require('../data/zoo_data');

function isManager(id) {
  const managerCheck = employees.some((element) => element.managers.includes(id));
  return managerCheck;
}
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'))
function getRelatedEmployees(managerId) {
if (isManager(managerId) === false ){throw new Error('O id inserido não é de uma pessoa colaboradora gerente!')};
const colab = employees.filter((element) => element.managers.includes(managerId));
const result = colab.map((element) => `${element.firstName} ${element.lastName}`);
return result;
}
console.log(getRelatedEmployees("9e7d4524-363c-416a-8759-8aa7e50c0992"));
module.exports = { isManager, getRelatedEmployees };
