document.getElementById('boton-edad') .addEventListener('click', function(){
    document.getElementById("presentacion").innerHTML = "22/08/1995 (27 años)"
});

document.getElementById('boton-ciudad') .addEventListener('click', function(){
    document.getElementById("presentacion").innerHTML = "Vivo en la ciudad de La Plata"
});

document.getElementById('boton-email') .addEventListener('click', function(){
    document.getElementById("presentacion").innerHTML = "Mi email es: biderbostfacundo@gmail.com"
});

document.getElementById('boton-telefono') .addEventListener('click', function(){
    document.getElementById("presentacion").innerHTML = "Mi telefono es: 2920-476832"
});

var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}