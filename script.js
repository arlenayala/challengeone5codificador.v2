const textArea = document.querySelector ("#cuadro");
const mensaje = document.querySelector ("#mensaje");




// Obtener el botón de copiar
const botonCopiar = document.querySelector("#boton-copiar");

// Agregar un evento de clic al botón
botonCopiar.addEventListener("click", () => {
  // Seleccionar el texto en el área de mensaje
  mensaje.select();
  mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copiar el texto al portapapeles
  navigator.clipboard.writeText(mensaje.value)
    .then(() => {
      // Mensaje de retroalimentación
      alert("¡Texto copiado al portapapeles!");
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
});



function btnEncriptar() {

 

    const textoEncriptado = encriptar(textArea.value);
    mensaje.value =textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage="none";
   
    const placeholder = document.querySelector(".mensaje-placeholder");
    placeholder.classList.add("hide-placeholder");
    mensaje.style.fontSize = "23px";

}


function btnDesencriptar() {
   
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value =textoEncriptado; 
    textArea.value="";

}

function encriptar(cadena) {
     let arreglo = ["e", "i", "a","o","u"];
     let arregloCodificado = ["enter", "imes", "ai","ober","ufat"];
     cadena=cadena.toLowerCase();
     
     let caracteresEspeciales = /[^a-z\s]/.test(cadena);
     if (caracteresEspeciales) {
         alert("No se puede encriptar.El texto contiene caracteres especiales.");
         return cadena;

         
     }


     for (let i = 0; i < arreglo.length; i++) {
         cadena =cadena.replace(new RegExp(arreglo[i],"g"),arregloCodificado[i]);
            
         }
        return cadena
  
}

function desencriptar(cadena) {
    let arreglo = ["e", "i", "a","o","u"];
    let arregloCodificado = ["enter", "imes", "ai","ober","ufat"];
    cadena=cadena.toLowerCase();
    cadena = cadena.replace(/[^a-z ]/g, "");


    for (let i = 0; i < arreglo.length; i++) {
        cadena =cadena.replace(arregloCodificado[i],arreglo[i]);
           
        }
       return cadena
}




