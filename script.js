// alert ('ciao')

var kiloMetri = prompt('Quanti kilometri vorrai percorrere ?');
var userAge = prompt('Quanti anni hai ?');

let x = 20;
let y = 0.21;

z = x * y;

if (userAge < 18) {
    discount = 20%;
} else if (userAge > 65); {
    discount = 40%;
} 

console.log (kiloMetri, userAge, z);

document.getElementById('prezzobiglietto'). innerHTML = z;