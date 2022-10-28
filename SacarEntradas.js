let img = document.querySelectorAll(".general")
console.log(img)

img.forEach((img) => {
    img.addEventListener("click", (e) => {
        window.location = `Sacar-Entradas.html?${e.target.attributes[0].nodeValue}`
        
    })
})