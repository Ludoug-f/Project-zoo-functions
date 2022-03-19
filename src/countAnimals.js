const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const keysAnimals = species.map((element) => element.name); // array com todos os valores de 'name' dentro de 'species'
  const valueAnimals = species.map((element) => element.residents.length); // array com o tamanho dos arrays da chave 'residents'
  if (!animal) {
    const result = {};
    keysAnimals.forEach((element, i) => { result[element] = valueAnimals[i]; }); // pega o array 'keysAnimals' e dentro do objeto vazio 'result' vai jogar cada item como chave e cada item do 'valueAnimals' como valor // ref: https://acervolima.com/como-criar-um-objeto-a-partir-de-dois-arrays-em-javascript/
    return result;
  }
  const valor = Object.values(animal); // pega um array contendo todos os valores do objeto parametro
  const objAnimal = species.find((element) => element.name === valor[0]); // objeto do animal com o nome declarado noo parametro
  const numberAnimals = objAnimal.residents.length; // conta o numero de animais
  if (valor.length === 2) {
    const totalAnimals = objAnimal.residents.filter((element) => element.sex === valor[1]); // filtra dentro de 'residents' os que possuem o 'sex' igual ao parametro
    return totalAnimals.length;
  } return numberAnimals;
}
module.exports = countAnimals;
