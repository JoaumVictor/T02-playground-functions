// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) return true;
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  let resultado = (base * altura) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, lies) {
  let pontos = 0;
  pontos += wins * 3;
  pontos += lies;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maiorNum = Math.max(...array);
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNum === array[index]) contador += 1;
  }
  return contador;
}
// Tive ajuda do Igor Brendow no desafio 6 nesse Math.max, eu tava fazendo 17 linhas de código pra descobrir o maior número, e ele me ajudou a resolver bem simples!

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1win = mouse - cat1;
  let gato2win = mouse - cat2;
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  if (gato1win > gato2win) {
    return 'cat1';
  }
  return 'cat2';
}

// Ajuda do código do Igor Brendow mais uma vez pra entender como usar o Math.abs

// Desafio 8
function fizzBuzz(numbers) {
  let resultado = [];
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9

function encode(frase) {
  let resposta = '';
  for (index = 0; index < frase.length; index += 1) {
    if (frase[index] === 'a') {
      resposta += '1';
    } else if (frase[index] === 'e') {
      resposta += '2';
    } else if (frase[index] === 'i') {
      resposta += '3';
    } else if (frase[index] === 'o') {
      resposta += '4';
    } else if (frase[index] === 'u') {
      resposta += '5';
    } else {
      resposta += frase[index];
    }
  }
  return resposta;
}

function decode(frase) {
  let resposta = '';
  for (index = 0; index < frase.length; index += 1) {
    if (frase[index] === '1') {
      resposta += 'a';
    } else if (frase[index] === '2') {
      resposta += 'e';
    } else if (frase[index] === '3') {
      resposta += 'i';
    } else if (frase[index] === '4') {
      resposta += 'o';
    } else if (frase[index] === '5') {
      resposta += 'u';
    } else {
      resposta += frase[index];
    }
  }
  return resposta;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
