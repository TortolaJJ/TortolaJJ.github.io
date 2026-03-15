//  Conectar con mi html
const boton = document.getElementById("botonCifra");
const frase = document.getElementById("frase");
const paso = document.getElementById("paso");
const resultado = document.getElementById("resultado");

// Cuando haces click
boton.addEventListener('click', function() {
    
    let textoFrase = frase.value;
    let numeroPaso = parseInt(paso.value) || 3;
    
    let cifrado = cifradoCesar(textoFrase, numeroPaso);
    resultado.textContent = `ORIGINAL: ${textoFrase} → CIFRADO: ${cifrado}`;
});

// funcion ejercicio anterior
function cifradoCesar(mensaje,clave){
    let mensajeCifrado = "";
    for(let i = 0;i<mensaje.length;i++){
        let letra = mensaje[i].toUpperCase();
        let codigo = letra.charCodeAt(0);
        let nuevoCodigo = codigo + clave;
        if(nuevoCodigo >90 ){
            nuevoCodigo = nuevoCodigo - 26;
        }
        let letraCifrada = String.fromCharCode(nuevoCodigo);
        mensajeCifrado += letraCifrada;
    }
    return mensajeCifrado;
}



