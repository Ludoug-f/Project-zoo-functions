const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      child += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      adult += 1;
    }
    if (element.age >= 50) {
      senior += 1;
    }
  });
  const result = { child, adult, senior };
  return result;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const func = countEntrants(entrants);
  return (func.child * prices.child) + (func.adult * prices.adult) + (func.senior * prices.senior);
}
module.exports = { calculateEntry, countEntrants };
