let urlSacarEntr = window.location.href
console.log(urlSacarEntr)

let index = urlSacarEntr.indexOf("?")
console.log(index)

let idPag = urlSacarEntr.substring(index+1)
console.log(idPag)

let img = document.getElementById("img")

let titulo = document.querySelector(".Nombre-pelicula")

if (idPag == "99") {
    img.src = "./img/pel1.jpg";

} else if (idPag == "98") {
    img.src = "./img/pel2.jpg";
    titulo.innerText = "TREN BALA"; 
} else if (idPag == "97") {
    img.src = "./img/pel3.jpg";
    titulo.innerText = "THOR AMOR Y TRUENO"; 
} else if (idPag == "96") {
    img.src = "./img/pel4.jpg";
    titulo.innerText = "JURASSIC WORLD: DOMINION"; 
} else if (idPag == "95") {
    img.src = "./img/pel5.jpg";
    titulo.innerText = "LIGHTYEAR"; 
} else if (idPag == "94") {
    img.src = "./img/pel6.jpg";
    titulo.innerText = "MINIONS: NACE UN VILLANO"; 
} else if (idPag == "93") {
    img.src = "./img/pel7.jpg";
    titulo.innerText = "TOP GUN: MAVERICK"; 
} else if (idPag == "92") {
    img.src = "./img/pel8.jpg";
    titulo.innerText = "LA HABITACIÓN DEL HORROR"; 
} else if (idPag == "91") {
    img.src = "./img/pel9.jpg";
    titulo.innerText = "LA GALLINA TURULECA"; 
}


let $cine = document.getElementById("cine")
let $formato = document.getElementById("formato")
let $dia = document.getElementById("dia")
let $funcion = document.getElementById("funcion")

let cines = ["Haedo", "Moron", "Moreno"]
let formatos = ["2D", "3D", "4D"]
let dias = ["Lunes", "Martes", "Miercoles"]
let funciones = ["12:00 hs", "14:00 hs", "16:00 hs"]



function mostrarLugares(arreglo, lugar){
    let elementos = '<option selected disables>--Seleccione--</option>'

    for (let i = 0; i < arreglo.length; i++) {
        elementos += `<option value="` + arreglo[i] + `">` + arreglo[i] + `</option>` 
    }
    lugar.innerHTML = elementos
}
mostrarLugares(cines, $cine);

$cine.addEventListener('change', function(){
    let valor = $cine.value
    switch (valor) {
        case 'Haedo':
            let recortar1 = formatos.slice(0, 3)
            mostrarLugares(recortar1, $formato)
            break;
        case 'Moron':
            let recortar2 = formatos.slice(0, 3)
            mostrarLugares(recortar2, $formato)
            break;
        
        case 'Moreno':
            let recortar3 = formatos.slice(0, 3)
            mostrarLugares(recortar3, $formato)
            break;
    }
})

$formato.addEventListener('change', function(){
    let valor = $formato.value
    switch (valor) {
        case '2D':
            let recortar4 = dias.slice(0, 3)
            mostrarLugares(recortar4, $dia)
            break;
        case '3D':
            let recortar5 = dias.slice(0, 3)
            mostrarLugares(recortar5, $dia)
            break;
        
        case '4D':
            let recortar6 = dias.slice(0, 3)
            mostrarLugares(recortar6, $dia)
            break;
    }
})

$dia.addEventListener('change', function(){
    let valor = $dia.value
    switch (valor) {
        case 'Lunes':
            let recortar7 = funciones.slice(0, 3)
            mostrarLugares(recortar7, $funcion)
            break;
        case 'Martes':
            let recortar8 = funciones.slice(0, 3)
            mostrarLugares(recortar8, $funcion)
            break;
        
        case 'Miercoles':
            let recortar9 = funciones.slice(0, 3)
            mostrarLugares(recortar9, $funcion)
            break;
    }
})



const boton = document.getElementById("botonn")

boton.addEventListener("click", function(){
    alert("Felicidades, usted a completado el proceso de compra!!!!!!\n" + "Su pelicula: " + titulo.innerText + "\nEstablecimiento: " + $cine.value +"\nFormato: " + $formato.value + "\nDia: " + $dia.value + "\nFuncion: " + $funcion.value + "\nDisfrute de su pelicula!!!")
})