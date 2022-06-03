function horaActual() {

    //Objeto date para actualizar la fecha
    fecha=new Date(); 

    hora=fecha.getHours(); //hora actual
    minuto=fecha.getMinutes(); //minuto actual
    segundo=fecha.getSeconds(); //segundo actual


    // si hora no es 10 le añadimos un 0 al marcador y lo mismo para minutos y segundos
    if (hora<10) { 
       hora="0"+hora;
       }
    if (minuto<10) { 
       minuto="0"+minuto;
       }
    if (segundo<10) { 
       segundo="0"+segundo;
       }

    //ver resuñtadp:
    mireloj = hora+" : "+minuto+" : "+segundo;	
            return mireloj; 


            
    }
    
function actualizar() {
mihora=horaActual(); //recoger hora actual
mireloj=document.getElementById("reloj"); //buscar elemento reloj
mireloj.innerHTML=mihora; //incluir hora en elemento
}
//actualizamos cada seguno
setInterval(actualizar,1000);