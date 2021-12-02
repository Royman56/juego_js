String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 


const palabras = ['oso','isa','usa','luz','ojo'];
const palabra = palabras[Math.floor(Math.random()*palabras.length)];
let guiones = palabra.replace(/./g,"_ ");
let contadorFallos = 0

document.querySelector('#output').innerHTML = guiones;
document.querySelector('#verificar').addEventListener('click',() => {
const letra = document.querySelector('#letra').value;

let fallo = true;
for(const i in palabra){
    if(letra == palabra[i]){
        guiones = guiones.replaceAt(i*2, letra);
        fallo = false;
    }
}

if(fallo){
contadorFallos++;
document.querySelector('#ahorcado').style.backgroundPosition = -(230*contadorFallos) + 'px 0';
if(contadorFallos==6){
    alert("Game Over")
}
}else{
    if(guiones.indexOf('_')<0){
       document.querySelector('#ganaste').style.display = 'flex';
    }
}
document.querySelector('#output').innerHTML = guiones;

document.querySelector('#letra').value = '';
document.querySelector('#letra').focus();
});