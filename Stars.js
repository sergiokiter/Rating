alert("hello world")
function calificar(item){
    console.log(item);
}
var stars = document.querySelectorAll(".star");
var rating =document.querySelector(".rating");

for(let i = 0; i < stars.length; i++) {
    stars[i].starValue = ( i + 1);
    ["mouseover","mouseout", "click"].forEach(function (e){
            stars[i].addEventListener(e, starRate);
    })
}

function starRate(e){
    let type = e.type;
    let starValue = this.starValue;
    if(type ==="click"){
        if (starValue > 1){
            rating.innerHTML = "Has votado esto" + starValue + "stars";
        }
    }
    stars.forEach( function(ele, ind){
        if(type === "click"){
            ele.classList.add("fix");
        }
        else{
            ele.classList.remove("fix");
            }
        
        
        if(type === "mouseover"){
            if(ind < starValue){
            ele.classList.add("over");
        }
            else{
                ele.classList.remove("over");
            }
        }
        if (type ==="mouseout"){
            ele.classList.remove("over");
        }
        
    })
}
    
        
 

    

   