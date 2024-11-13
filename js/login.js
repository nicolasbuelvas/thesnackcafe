function iniciarSesion(event) {
    event.preventDefault();
    const correo = document.getElementById('loginCorreo').value;
    const password = document.getElementById('loginPassword').value;
    console.log("Iniciando sesión con:", correo, password);
    cerrarModal(); // Cierra el modal después de iniciar sesión
}

// Asignar la función al objeto global window
window.iniciarSesion = iniciarSesion;