function comprar(producto){

let numero="51931417388"

let mensaje="Hola, quiero comprar el "+producto

let url="https://wa.me/"+numero+"?text="+encodeURIComponent(mensaje)

window.open(url)

}