const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const verify = employees.find((element) =>
    employeeName.includes(element.firstName) || employeeName.includes(element.lastName));
  return verify;
}

module.exports = getEmployeeByName;
