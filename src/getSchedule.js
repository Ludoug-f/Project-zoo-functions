const { species, hours } = require('../data/zoo_data');

const createScheduleObject = (day) => {
  const { [day]: { open, close } } = hours;
  const exhibition = species.filter((animal) => animal.availability.includes(day))
    .map((animal) => animal.name);

  return {
    officeHour: open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
    exhibition: open === 0 ? 'The zoo will be closed!' : exhibition,
  };
};

function getSchedule(scheduleTarget) {
  const weekDays = Object.keys(hours);
  const animals = species.map((animal) => animal.name);

  if (weekDays.includes(scheduleTarget)) {
    return { [scheduleTarget]: createScheduleObject(scheduleTarget) };
  }

  if (animals.includes(scheduleTarget)) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }

  return weekDays.reduce((acc, day) => {
    acc[day] = createScheduleObject(day);
    return acc;
  }, {});
}

module.exports = getSchedule;
