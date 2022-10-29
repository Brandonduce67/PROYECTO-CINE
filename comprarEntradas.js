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

