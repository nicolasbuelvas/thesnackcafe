// login.js

function iniciarSesion(event) {
    event.preventDefault();
    const correo = document.getElementById('loginCorreo').value;
    const password = document.getElementById('loginPassword').value;
    // Validación de datos y lógica de inicio de sesión
    console.log("Iniciando sesión con:", correo, password);
    cerrarModal(); // Cierra el modal después de iniciar sesión
}