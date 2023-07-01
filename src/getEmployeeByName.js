const { employees } = require('../data/zoo_data');

// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const employeeMap = employees.reduce((acc, employee) => {
    acc[employee.firstName] = employee;
    acc[employee.lastName] = employee;
    return acc;
  }, {});

  return employeeMap[employeeName] || null;
}

module.exports = getEmployeeByName;
