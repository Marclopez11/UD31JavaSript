//expresionres regulares regular fecha

var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
        var testDate = "09/04/22"
        if (date_regex.test(testDate)) {
            console.log("La data es correcta.");
        }
        else{
            console.log("La data es incorrecta");
        }


//validar email

var textemail = prompt('Introduce dirección email: ');

if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(textemail)){  
    alert("La dirección de email es incorrecta.");
} else{
    alert("La dirección de email es correcta.");

}


//remplazar cadena

const reg = /\d.*\d/
const str = "Java3foobar4Script"
const newStr = str.replace(reg, "-");
console.log(newStr);
// "Java-Script"

  
