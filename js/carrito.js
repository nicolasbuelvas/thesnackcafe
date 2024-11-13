// carrito.js

function actualizarCarrito(cantidad) {
    console.log("Carrito actualizado con:", cantidad);
    document.querySelector('.contador-carrito').innerText = cantidad;
}