/*
5- Faça um programa que dê entrada manual de 10 números 
armazene em um vetor e ordene esses 10 números crescente, 
fazer uso do laço de repetição for.
*/

console.clear();
let teclado = require (`Prompt-sync`)();
let numeros = new Array();

for (let x = 0; x <= 9; x++){
    numeros[x] = parseInt(teclado(`Digite o número do índice ${x} do Array: `));
}

for (let z =0; z <= 9; z++){
    for (let y = z+1; y <= 9; y++){
        if (numeros[z] > numeros[y]){
            let temporario = numeros[z];
            numeros[z] = numeros[y];
            numeros[y] = temporario;
        }
    }
}

console.log(`O Array em ordem crescente ${numeros}`);



