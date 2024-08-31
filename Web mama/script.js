$(".seccionCuarta article h4").click(function(){
    $(this).parent().siblings().children("div").slideUp();
    $(this).next().slideToggle();
});
$(".dudas article h4").click(function(){
    $(this).parent().siblings().children("div").slideUp();
    $(this).next().slideToggle();
});

// CALCULO TAMAﾃ前 PANTALLA
////////////////////////////////
function sizeWindow(){
    var ancho_ventana = window.innerWidth;
if( ancho_ventana > 970 ){
        var menuMov = document.getElementById("menu");
        menuMov.style.display = 'inline-block'; 
        var maskMov = document.getElementById("mascara");
        maskMov.style.display = 'none'; 

    }else{
        var menuMov = document.getElementById("menu");
        menuMov.style.display = 'none'; 
    }
}

function controlcookies() {
         // si variable no existe se crea (al clicar en Aceptar)
    localStorage.controlcookie = (localStorage.controlcookie || 0);
 
    localStorage.controlcookie++; // incrementamos cuenta de la cookie
    cookie1.style.display='none'; // Esconde la política de cookies
}

////////////////////////////////
// MENU DESPLEGABLE
////////////////////////////////
$("#btn_menu").click(function(){
    
    $("#menu").slideToggle();
    $("#mascara").slideToggle();
});
$("#mascara").click(function(){
    $("#menu").slideToggle();
    $(this).slideToggle();
});
