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

        let p2 = document.getElementById("Nomensajes");

        let p2_2 = document.getElementById("Nomensajes2");

        let img = document.getElementById("Imagen2");

        //Validar

        if (!validar(input)) {

            p2.innerHTML = "El texto que ingresó no es valido; Por favor intentelo denuevo."

            return;

        }

        //p que seria "Parrafo" imprime el input del usuario
        //replace reemplaza la cadena

        p2_2.style.display = "none";
        
        img.style.display = "none";

        p.innerHTML = input.replace(/e/g, "enter")
                           .replace(/i/g, "imes")
                           .replace(/a/g, "ai")
                           .replace(/o/g, "ober")
                           .replace(/u/g, "ufat");
                                                       
        p2.innerHTML = "Su texto encriptado es: ";
        

    }

//Desencriptador

    function Desencriptar(){

        let input = document.getElementById("Solicitud").value;

        let p = document.getElementById("Parrafo");

        let p2 = document.getElementById("Nomensajes");

        //Validar

        if (!validar(input)) {

            p2.innerHTML = "El texto que ingresó no es valido; Por favor intentelo denuevo."

            return;

        }

        p2.innerHTML = "Su texto desencriptado es: ";
        
        p.innerHTML =  input.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");


    }

//Copiar texto

    function CopiarTexto(){

    
        let p = document.getElementById("Parrafo").innerHTML;


        navigator.clipboard.writeText(p = p.replace("Su texto encriptado es:", ""));


    }
