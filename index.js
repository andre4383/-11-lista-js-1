/**** Escreva o código abaixo 👇******/
// 1 -
function somar(a, b){
  return a + b;
};
// 2 - 
function multiplicar(a, b){
  return a * b;
};
// 3 - 
function subtrair(a, b){
  return a - b;
};
// 4 - 
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero");
  }
  return a / b;
}

// 5 -
function calcularMedia(nota1, nota2, nota3, nota4){
  return (nota1 + nota2 + nota3 + nota4) / 4;
};

// 6 -
function elevarPotencia(base, expoente){
  return base ** expoente;
};

// 7 -
function calcularAreaRetangulo(base, altura){
  return base * altura;
};

// 8 -
function verificarParOuImpar(numero){
  return numero % 2 === 0 ? "par" : "ímpar";
};

// 9 -
function calcularRaizQuadrada(numero){
  return Math.sqrt(numero);
};

// 10 -
function calcularHipotenusa(cateto1, cateto2){
  return Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
};

/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
