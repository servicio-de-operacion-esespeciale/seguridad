let menuVisible = false;

//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// La función 'efectoHabilidades' no estaba definida, lo que causaba un error.
// La he comentado. Si la necesitas, debes definirla en tu archivo script.js
/*
window.onscroll = function(){
    efectoHabilidades();
}
*/