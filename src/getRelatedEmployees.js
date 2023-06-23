const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const relatedEmployees = employees.reduce((acc, employee) => {
    if (employee.managers.includes(managerId)) {
      acc.push(`${employee.firstName} ${employee.lastName}`);
    }
    return acc;
  }, []);

  return relatedEmployees;
}

module.exports = { isManager, getRelatedEmployees };
