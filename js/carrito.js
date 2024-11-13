function actualizarCarrito(cantidad) {
    console.log("Carrito actualizado con:", cantidad);
    document.querySelector('.contador-carrito').innerText = cantidad;
}

// Asignar la función al objeto global window
window.actualizarCarrito = actualizarCarrito;