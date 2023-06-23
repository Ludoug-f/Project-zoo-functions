const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!Array.isArray(entrants)) return { child: 0, adult: 0, senior: 0 };

  const response = entrants.reduce((acc, element) => {
    if (element.age < 18) {
      acc.child += 1;
    } else if (element.age < 50) {
      acc.adult += 1;
    } else if (element.age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });

  return response;
}

function calculateEntry(entrants) {
  if (!Array.isArray(entrants) || entrants.length === 0) return 0;

  const { child, adult, senior } = countEntrants(entrants);

  return (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };
