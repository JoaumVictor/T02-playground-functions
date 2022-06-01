// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) return 'Vazio!';
  const newTech = tech.sort();
  let resposta = [];
  for (let index = 0; index < tech.length; index += 1) {
    resposta.push({ tech: newTech[index], name });
  }
  return resposta;
}

// Desafio 11
function generatePhoneNumber(numero) {
  let resposta = '(';
  if (numero.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numero.length; index += 1) {
    if (numero[index] < 0 || numero[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let repete = '';
  for (y = 0; y < numero.length; y += 1) {
    repete = 0;
    for (x = 0; x < numero.length; x += 1) {
      if (numero[y] === numero[x]) {
        repete += 1;
        if (repete >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
    resposta += numero[y];
    if (y === 1) {
      resposta += ') ';
    }
    if (y === 6) {
      resposta += '-';
    }
  }
  return resposta;
}

// Desafio 12
function triangleCheck(a, b, c) {
  if (a < b + c) {
    if (b < a + c) {
      if (c < a + b) return true;
    }
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  const dale = string.match(/\d+/g);
  let resultado = 0;
  for (let i = 0; i < dale.length; i += 1) {
    resultado += Number(dale[i]);
  }
  if (resultado === 1) return `${resultado} copo de água`;
  return `${resultado} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
