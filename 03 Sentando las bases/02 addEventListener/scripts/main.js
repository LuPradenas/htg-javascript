'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');
const error = document.querySelector('#mensaje-error');
const enviado = document.querySelector('#enviado');
const comentario = document.querySelector('#comentarios');
const inputSolucion = document.querySelector('#input-solucion');

function recibirNombre(event) {
  let comentarios = document.createElement('p');
  let borrador = setTimeout (enviado ,5000);
  event.preventDefault();
  console.log(event);

  enviado.innerText =' El formulario se ha enviado correctamente.';
  enviado.style.color = 'purple';

  comentario.innerText = inputNombre.value + ' ' + inputSolucion.value;
  comentario.appendChild(comentarios);

}

function interceptarNombre(event) {
  let nombre = event.target.value ;
  console.log(nombre);

   if(nombre.length <= 4 || nombre.length > 50){

    error.innerText = 'El nombre debe ser entre 5 y 50 caracteres';
    error.style.color = 'red';
   }
   else{
    error.innerText = '';

   }
   
}

formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);
inputSolucion.addEventListener('input',recibirNombre);
