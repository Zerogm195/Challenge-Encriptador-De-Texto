//Encriptador
    function validar(txtval) {

        const valido = /^[a-z\s]*$/.test(txtval);
    
        if (!valido) {

        return false;

        } else {

        return true;

        }
    }

    function Encriptar(){

        let input = document.getElementById("Solicitud").value;

        let p = document.getElementById("Parrafo");

        //Validar

        if (!validar(input)) {

            p.innerHTML = "El texto que ingresó no es valido; Por favor intentelo denuevo."

            return;

        }

        //p que seria "Parrafo" imprime el input del usuario
        //replace reemplaza la cadena

        p.innerHTML = "Su texto encriptado es: "+ input.replace(/e/g, "enter")
                                                       .replace(/i/g, "imes")
                                                       .replace(/a/g, "ai")
                                                       .replace(/o/g, "ober")
                                                       .replace(/u/g, "ufat");

    }

//Desencriptador

    function Desencriptar(){

        let input = document.getElementById("Solicitud").value;

        let p = document.getElementById("Parrafo");

        //Validar

        if (!validar(input)) {

            p.innerHTML = "El texto que ingresó no es valido; Por favor intentelo denuevo."

            return;

        }
        
        p.innerHTML = "Su texto desencriptado es: " + input.replace(/enter/g, "e")
                                                           .replace(/imes/g, "i")
                                                           .replace(/ai/g, "a")
                                                           .replace(/ober/g, "o")
                                                           .replace(/ufat/g, "u");

    }

//Copiar texto

    function CopiarTexto(){

    
        let p = document.getElementById("Parrafo").innerHTML;


        navigator.clipboard.writeText(p = p.replace("Su texto encriptado es: ", ""));


    }