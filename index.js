import { somaArray } from './somaArray.js';

const array = [1, 2, 3, 4];
const soma = somaArray(array);
console.log(soma); // 10
console.log(soma === 10); // true

console.log(somaArray([89, 34, 546, 12, 54, 567, 1234, 43534, 345, 654])); // 47069
console.log(somaArray([89, 34, 546, 12, 54, 567, 1234, 43534, 345, 654]) === 47069);

console.log(somaArray([]) === 0);
console.log(somaArray([5]) === 5);
console.log(somaArray([5, -10]) === -5);


import { contaVogais } from './gruposDeLetras.js';
import { contaConsoantes } from './gruposDeLetras.js';

let s = "ifrs";
const vogais = contaVogais(s);
const consoantes = contaConsoantes(s);

console.log(vogais);           // imprime 1
console.log(vogais === 1);     // imprime true
console.log(consoantes);       // imprime 3
console.log(consoantes === 3); // imprime true

s = 'instituto federal';
console.log(contaVogais(s) === 7);
console.log(contaConsoantes(s) === 9);

console.log(contaVogais('informática') === 4);
console.log(contaConsoantes('informática') === 6);

console.log(contaVogais('computação') === 4);
console.log(contaConsoantes('computação') === 4);


import { contaCaractere } from './contaCaractere.js';

const umaString = 'uma string de teste';
const umCaractere = 's';

// há dois `s` em `uma string de teste`
console.log(contaCaractere(umaString, umCaractere)); // 2
console.log(contaCaractere(umaString, umCaractere) === 2); // true
// sempre true:
console.log(contaCaractere(umaString, 'e') === 3);
console.log(contaCaractere(umaString, 'o') === 0);

console.log(contaCaractere('', ' ') === 0);
console.log(contaCaractere(' ', ' ') === 1);

console.log(contaCaractere('ABC', 'b') === 0);
console.log(contaCaractere('ABC', 'B') === 1);
console.log(contaCaractere('POO', 'O') === 2);


import { eliminar } from './eliminar.js';

let str1 = 'aula';
let str2 = eliminar(str1, 'a'); // eliminar 'a' de 'aula'
console.log(str1 === 'aula');
console.log(str2 === 'ul'); // 'aula' se torna 'ul'

let str3 = eliminar(str1, str2); // eliminar 'ul' de 'aula'
console.log(str3 === 'aa'); // 'aula' sem 'ul' se torna 'aa'

// Eliminar os caracteres independente da ordem:
console.log(eliminar('texto de teste', 'tx') === 'eo de ese');
console.log(eliminar('palavra', 'rlv') === 'paaa');
console.log(eliminar('exemplo', 'ertyui') === 'xmplo');

console.log(eliminar('exemplo', '') === 'exemplo');
console.log(eliminar('TESTE', 'e') === 'TESTE');
console.log(eliminar('teste', 'eeeeee') === 'tst');
console.log(eliminar('POO', 'OP') === '');
console.log(eliminar('', 'abc') === '');
console.log(eliminar('', '') === '');
console.log(eliminar('aabbbbbccccc', 'cc') === 'aabbbbb');
console.log(eliminar('aabbbbbccccc', 'abbc') === '');


import { localizar } from './localizar.js';

const letraA = 'a'; // a letra `a` está nos índices marcados abaixo
//                    _ _ _        _ _ _
const umTexto = `programacao orientada a objetos`;
//               0123456789012345678901234567890
let indices = localizar(umTexto, letraA);

// a letra `a` aparece nos índices 5, 7, 9, 18, 20 e 22
console.log(indices); // [5, 7, 9, 18, 20, 22]

console.log(indices.length === 6); // true

console.log(indices[0] === 5);  // true
console.log(indices[1] === 7);  // true
console.log(indices[2] === 9);  // true
console.log(indices[3] === 18); // true
console.log(indices[4] === 20); // true
console.log(indices[5] === 22); // true

indices = localizar(`woo`, 'o');
console.log(indices.length === 2); // true
console.log(indices[0] === 1); // true
console.log(indices[1] === 2); // true

indices = localizar(`woo`, letraA);
console.log(indices.length === 0); // true

indices = localizar(`woo`, 'W');
console.log(indices.length === 0); // true

console.log(localizar(`array`, 'y')[0] === 4); // true


import { tifanofaufo } from './tifanofaufo.js';

console.log(tifanofaufo("boa noite, senhoras e senhores")); // foa noite fenhofaf e fenhofef
console.log(tifanofaufo("tiranossauro rex")) // tifanofaufo fex
console.log(tifanofaufo("console.log")); // fonfole.log
console.log(tifanofaufo("só mais um pra terminar")); //fó maif um pfa tefminaf
console.log(tifanofaufo("acabou, último caso de teste")); // afafou, último fafo fe tefte
