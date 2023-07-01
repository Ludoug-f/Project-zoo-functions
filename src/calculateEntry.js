const { prices } = require('../data/zoo_data');

// Você deve isolar a parte da lógica na função `countEntrants` que se encontra no mesmo arquivo da função `calculateEntry`. Ela deverá receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de classificação:
// Pessoas com idade menor que 18 anos são classificadas como crianças (child);
// Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
// Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).

// Após terminar a implementação da função `countEntrants` você deverá utilizá-la para implementar a função `calculateEntry`. Esta deverá receber um array de visitantes e a partir da quantidade de visitantes e faixa etária de cada um, deverá retornar o valor total a ser cobrado.

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
