// alert ('ciao')

const  kilometriPercorsi = parseInt( prompt('Quanti kilometri vuoi percorrere ?'));
const  etaUtente = parseInt( prompt('Quanti anni hai ?'));

var prezzoKilometri = 0.21;

if (etaUtente < 18) { // 20% sconto
    prezzoKilometri = prezzoKilometri * 0.8;
    console.log ('minorenne');
} else if (etaUtente >= 65) { // 40% sconto
    prezzoKilometri = prezzoKilometri * 0.6;
    console.log ('pensionato');
}

var prezzoTotale = prezzoKilometri * kilometriPercorsi;

console.log (kilometriPercorsi, etaUtente, prezzoTotale.toFixed(2));

document.getElementById('prezzototalebiglietto').innerHTML = prezzoTotale;