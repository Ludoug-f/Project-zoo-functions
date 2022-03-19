const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const verifyAnimal = species.find((element) => element.name === animal);
  // verifyAnimal procura o objeto que contem o valor da chave name = ao parametro na funcao
  const { residents } = verifyAnimal;
  // atribuindo a variavel residents o array que é valor da chave residents do objeto que tive como resposta no find anterior
  const verifyAge = residents.every((verify) => verify.age >= age);
  // verifica se todas as chaves age tem o valor minimo
  return verifyAge;
}
module.exports = getAnimalsOlderThan;
