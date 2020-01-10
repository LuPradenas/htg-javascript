console.info('Cuando veas éste mensaje en consola, ya habrás terminado ésta parte del ejercicio. Borra ésta línea cuando ya la hayas visto alguna vez en la consola al acceder a ésta página.')
 /* ejercicio 1 */
let comentario = document.querySelectorAll('.comment--text');

comentario[1].classList.add('commint')

 /* Ejercicio 2 */
let borde = document.querySelectorAll('hr');

for( let i=0;  i < borde.length; i++){

borde[i].style.borderColor = 'red' ;
}

  /* Ejercicio 3*/
 let comentarios = document.querySelectorAll('.comment--text')
 for(let i= 0;i < comentarios.length;i++){
     if(comentarios[i].textContent.length > 150){
         comentarios[i].classList.add('ocultos');
     
     }    }
