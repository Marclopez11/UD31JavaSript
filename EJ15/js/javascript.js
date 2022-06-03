
//tras cargar la página ...
window.onload = function() { 
    visor1=document.getElementById("visor"); 
    mititulo=document.getElementById("titulo"); 
    }
    function mifoto(num) { 
             f="fotos/f"+num+".png"; //ruta de la nueva imagen
             document.images["fotoVisor"].src=f; //cambiar imagen
             t=document.images["f"+num].alt; //texto de pie de foto
             mititulo.innerHTML=t; //cambiar pie de foto
    }