const { employees } = require('../data/zoo_data');

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
