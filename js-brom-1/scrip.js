const input = document.querySelector('#texto');
const resultado = document.getElementById('resultado');
input.addEventListener('input', function(){
    const text = input.value.toUpperCase();
    resultado.textContent = text;
});

const boton = document.getElementsByClassName('btn')[0]; 
    boton.addEventListener('Click', function(){
    const text = input.value.toUpperCase();
    resultado.textContent = text;
    
});