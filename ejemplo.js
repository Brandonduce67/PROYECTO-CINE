let urlSacarEntr = window.location.href
console.log(urlSacarEntr)

let index = urlSacarEntr.indexOf("?")
console.log(index)

let urlPartido = urlSacarEntr.substring(index+1)
console.log(urlPartido)





