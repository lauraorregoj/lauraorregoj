// Código desarrollado por: Laura Orrego Josa
// Medellín, Colombia

// Definimos la lista vacía para almacenar los nombres para el sorteo
let amigos = [];

function limpiarCaja() {
    // Query Selector es un selector general. GetElementById obtiene únicamente po ID
    // Usando # en querySelector, le estoy indicando que lo busque por ID
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}

function agregarAmigo() { 

    // Definimos la variable nombreAmigo que corresponde al input
    let nombreAmigo = document.getElementById('amigo').value;
    // Definimos la variable lista amigos para llamar al elemento de HTML donde almacenaremos la lista de amigos
    let listaAmigos = document.getElementById('listaAmigos');

    if (nombreAmigo == ''){

        // Condicional para indicar una alerta cuando el nombre a ingresar es un elemento vacío
        alert('Por favor ingrese un nombre válido');

    } else {

        // Almacenar en la lista 'amigos' en el último lugar el nombre ingresado
        amigos.push(nombreAmigo);

        // Condicional para mostrar la lista elemento por elemento en una línea nueva
        if (amigos.length == 1){
            // Cuando es el primer elemento, se muestra en la primera línea
            listaAmigos.innerHTML = amigos[amigos.length-1];
        }else if (amigos.length >= 2){
            // A partir del segundo elemento, se muestra en una nueva línea
            listaAmigos.innerHTML += `<li>${amigos[amigos.length-1]}</li>`
        }

        // Cada que se almacene un nombre y se muestre en la lista, se limpia la caja
        limpiarCaja();
    }    
}

function sortearAmigo() {

    // Limpiamos el elemento donde se muestra la lista 
    listaAmigos.innerHTML = '';

    // Definimos un número aleatorio para seleccionar el nombre de la lista de acuerdo al índice
    // El número de debe ser escogido entre en número de amigos de se agregó a la lista
    let indiceAleatorio = Math.floor(Math.random() * amigos.length) + 1;
    // Se llama al elemento para mostrar el resultado con el formato verde
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${amigos[indiceAleatorio]}`
}