//Encriptador

    function Encriptar(){

        let input = document.getElementById("Solicitud").value;

        let p = document.getElementById("Parrafo");

        //p que seria "Parrafo" imprime el input del usuario
        //replace reemplaza la cadena

        p.innerHTML = input.replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/a/g, "ai")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "ufat");

    }

//Desencriptador

    function Desencriptar(){

        let input = document.getElementById("Solicitud").value;

        let p = document.getElementById("Parrafo");
        
        p.innerHTML = input.replace(/enter/g, "e")
                        .replace(/imes/g, "i")
                        .replace(/ai/g, "a")
                        .replace(/ober/g, "o")
                        .replace(/ufat/g, "u");

    }