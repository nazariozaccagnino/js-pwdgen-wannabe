let username = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favcolor = prompt("Qual è il tuo colore preferito?");
let year = 24
let passphrase = username+surname+favcolor
document.getElementById('pass').innerHTML = passphrase+year;