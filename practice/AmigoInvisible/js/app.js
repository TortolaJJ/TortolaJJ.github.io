
//variables//
let lista = []; //array donde introducir los nombres//

//DOM conectar los ids con js para localizar html
//seleccionar elementos descritos como id en html para que js sepa que tiene que hacer y poner tambien las comillas //
const colega = document.getElementById("nombreAmigo");
const anyadirLista = document.getElementById("BotonMagico");
const mostrarLista = document.getElementById("listaNombresColegas");
const emparejamiento = document.getElementById("Emparejar");
const listaFinal = document.getElementById("listaEmparejamientos");

//ahora vamos a crear la funcion para guardar el nombre//

function guardarNombre(e){

   e.preventDefault(); //Evita que el formulario recargue la página//
   const nombreColega = colega.value;//nombreAmigo es donde el id del html introduces el nombre//

   lista.push(nombreColega); //Aqui guardamos el nombre en una array//
   console.log(lista); //Mostrar la lista almacenada//

   mostrarLista.innerHTML = lista.map(n => `<li>${n}</li>`).join("");//mostrar la lista en pantalla//
   colega.value = "";
}

function emparejar(){
    if(lista.length <5){
        alert("Minimo 5 participantes")//instruccion de alerta para poner un limite de participantes
        return;
    }

let copia = lista.slice(); // hacemos una lista nueva 
copia.sort(() => Math.random() - 0.5); //mezclamos la lista aleatoriamente


let mezclaDeColegas = [];
for(let i = 0; i<copia.length;i++){//RECORREMOS CON UN ARRAY PARA VER TODO EL CONTENIDO DE LA LISTA
    let amigo = copia[i];
    let asignado = copia[(i + 1) % copia.length]; // siguiente de la lista 
    mezclaDeColegas.push(`${amigo} → ${asignado}`);

}


 listaFinal.innerHTML = mezclaDeColegas.map(e => `<li>${e}</li>`).join("");



    
        
}
//EVENTOS hacer la llamada con el click y su function asociada

anyadirLista.addEventListener("click", guardarNombre);
emparejamiento.addEventListener("click",emparejar);




