let salarioBruto = parseFloat(6_000.00);

let faixa1 ={
    inicio: 0,
    fim: 1_518.00,
    aliquota: 0.075
};

let faixa2 ={
    inicio: 1_518.01,
    fim: 2_793.88,
    aliquota: 0.9
};

let faixa3 ={
    inicio: 2_793.89,
    fim: 4_190.83,
    aliquota: 0.9
};

let faixa4 ={
    inicio: 4_190.84,
    fim: 8_157.813,
    aliquota: 0.14
};

let tabelaINSS = [faixa1, faixa2, faixa3, faixa4];
console.table(tabelaINSS);

for (let i = 0; i < tabelaINSS.length; i++){
    const faixa = tabelaINSS[i];
    if(salarioBruto >= faixa.inicio && //as duas condições tem que ser verdadeiras
        salarioBruto <= faixa.fim) {
            faixaEncontrada = faixa;
            break; //interrompe o for
        }
}

console.log(faixaEncintrada);


//let inssFaixa1Inicio = 0;
//let inssFaixa1Fim = 1_518.00;
//let inssFaixa1Aliquota = 7.5;