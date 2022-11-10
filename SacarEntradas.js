

let peliculas = [{
    nombre: "DC LIGA DE SUPER MASCOTAS",
    rutaImg: "./img/pel1.jpg",
    id: "99",
    claseDelpadre: "general",
    claseHijo: "general__imagen",
    claseImg: "filtro",
    clase2: "cont-img",
    claseTitulo: "Nombre-pelicula"
},{
        nombre: "TREN BALA",
        rutaImg: "./img/pel2.jpg",
        id: "98",
        claseDelpadre: "general",
        claseHijo: "general__imagen",
        claseImg: "filtro",
        clase2: "cont-img",
        claseTitulo: "Nombre-pelicula"
    }]

let contenedor = document.getElementById("contenedorPadre")

peliculas.forEach((peliculas) => {
    let divPadre = document.createElement ("div")
    divPadre.className = peliculas.claseDelpadre
     
    divPadre.innerHTML = `<figure class="general__imagen"><img id="${peliculas.id}" class="filtro" src="${peliculas.rutaImg}" alt="THOR AMOR Y TRUENO"></figure>

    <div class="cont-img">
        <h3 class="Nombre-pelicula">${peliculas.nombre}</h3>                      
    </div>`



    contenedor.appendChild(divPadre)
}) 

let img = document.querySelectorAll(".general")
console.log(img)

img.forEach((img) => {
    img.addEventListener("click", (e) => {
        window.location = `Sacar-Entradas.html?${e.target.attributes[0].nodeValue}`
        
    })
})