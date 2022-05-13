var risultato = 0;
let numero = "";
var piu = false;
var meno = false;
var molti = false;
var divi = false;
var primo = true;


function zero() {
    var valore = "0";
    numero = numero + valore;
    document.getElementById("schermo").innerHTML = numero;
    return 0;
}
function uno() {
    var valore = "1";
    numero = numero + valore;
    document.getElementById("schermo").innerHTML = numero;
    return 0;
}
function due() {
    var valore = "2";
    numero = numero + valore;
    document.getElementById("schermo").innerHTML = numero;
    return 0;
}
function tre() {
    var valore = "3";
    numero = numero + valore;
    document.getElementById("schermo").innerHTML = numero;
    return 0;
}
function quattro() {
    var valore = "4";
    numero = numero + valore;
    document.getElementById("schermo").innerHTML = numero;
    return 0;
}
function cinque() {
    var valore = "5";
    numero = numero + valore;
    document.getElementById("schermo").innerHTML = numero;
    return 0;
}
function sei() {
    var valore = "6";
    numero = numero + valore;
    document.getElementById("schermo").innerHTML = numero;
    return 0;
}
function sette() {
    var valore = "7";
    numero = numero + valore;
    document.getElementById("schermo").innerHTML = numero;
    return 0;
}
function otto() {
    var valore = "8";
    numero = numero + valore;
    document.getElementById("schermo").innerHTML = numero;
    return 0;
}
function nove() {
    var valore = "9";
    numero = numero + valore;
    document.getElementById("schermo").innerHTML = numero;
    return 0;
}
function punto() {
    var valore = ".";
    numero = numero + valore;
    document.getElementById("schermo").innerHTML = numero;
    return 0;
}
function reset() {
    numero = "";
    risultato = 0;
    primo = true;
    document.getElementById("schermo").innerHTML = numero;
    return 0;
}


function somma() {
    if(primo == true) {
        risultato = parseFloat(numero);
        primo = false;
    }
    if(piu == true){
        risultato = risultato + parseFloat(numero);
    }
    if(molti == true) {
        risultato = risultato * parseFloat(numero);
    }
    if(meno == true) {
        risultato = risultato - parseFloat(numero);
    }
    if(divi == true) {
        risultato = risultato / parseFloat(numero);
    }
    numero = "";
    document.getElementById("schermo").innerHTML = numero;
    piu = true;
    meno = false;
    molti = false;
    divi = false;
    return 0;
}
function sottrai() {
    if(primo == true) {
        risultato = parseFloat(numero);
        primo = false;
    }
    if(piu == true){
            risultato = risultato + parseFloat(numero);
    }
    if(molti == true) {
            risultato = risultato * parseFloat(numero);
    }
    if(meno == true) {
            risultato = risultato - parseFloat(numero);
    }
    if(divi == true) {
        risultato = risultato / parseFloat(numero);
    }
    numero = "";
    document.getElementById("schermo").innerHTML = numero;
    piu = false;
    meno = true;
    molti = false;
    divi = false;
    return 0;
}
function moltiplica() {
    if(primo == true) {
        risultato = parseFloat(numero);
        primo = false;
    }
    if(piu == true){
        risultato = risultato + parseFloat(numero);
    }
    if(molti == true) {
        risultato = risultato * parseFloat(numero);
    }
    if(meno == true) {
        risultato = risultato - parseFloat(numero);
    }
    if(divi == true) {
        risultato = risultato / parseFloat(numero);
    }

    numero = "";
    document.getElementById("schermo").innerHTML = numero;
    piu = false;
    meno = false;
    molti = true;
    divi = false;
    return 0;
}
function dividi() {
    if(primo == true) {
        risultato = parseFloat(numero);
        primo = false;
    }
    if(piu == true){
        risultato = risultato + parseFloat(numero);
    }
    if(molti == true) {
        risultato = risultato * parseFloat(numero);
    }
    if(meno == true) {
        risultato = risultato - parseFloat(numero);
    }
    if(divi == true) {
        risultato = risultato / parseFloat(numero);
    }
    numero = "";
    document.getElementById("schermo").innerHTML = numero;
    piu = false;
    meno = false;
    molti = false;
    divi = true;
    return 0;
}


function uguale() {
    if(piu == true) {
        risultato = risultato + parseFloat(numero);
        document.getElementById("schermo").innerHTML = risultato;
        numero = "";
        piu = false;
    }
    if(meno == true) {
        risultato = risultato - parseFloat(numero);
        document.getElementById("schermo").innerHTML = risultato;
        numero = "";
        meno = false;
    }
    if(molti == true) {
        risultato = risultato * parseFloat(numero);
        document.getElementById("schermo").innerHTML = risultato;
        numero = "";
        molti = false;
    }
    if(divi == true) {
        risultato = risultato / parseFloat(numero);
        document.getElementById("schermo").innerHTML = risultato;
        numero = "";
        divi = false;
    }
    return 0;
}
