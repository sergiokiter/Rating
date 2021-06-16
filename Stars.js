var contador;
function calificar(item){
  console.log(item);
  contador=item.id[0];
  let nombre = item.id.substring(1);

  for(let i=0; i<5; i++){
    if(i<contador){
      document.getElementById((i+1)+nombre).style.color="orange";
    }else{ document.getElementById((i+1)+nombre).style.color="silver";

    }
  }
}
function changeColor(item){
  console.log(item);
  contador=item.id[0];
  let nombre = item.id.substring(1);

  for(let i=0; i<5; i++){
    if(i<contador){
      document.getElementById((i+1)+nombre).style.color = 'red';
    }else{ document.getElementById((i+1)+nombre).style.color= 'silver';
    }  
  } 
}

function bodyClick(event) {
let elementoClick = event.srcElement;
let clasesElemento = elementoClick.classList.value;

if (!clasesElemento.includes('fa-star')) {
  let stars = document.querySelectorAll('.fa-star');
  stars.forEach(star => {
    star.style.removeProperty('color');
  });
}
}