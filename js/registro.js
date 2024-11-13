function registrarUsuario(event) {
    event.preventDefault();
    const correo = document.getElementById('registroCorreo').value;
    const codigo = document.getElementById('registroCodigo').value;
    const password = document.getElementById('registroPassword').value;
    const passwordRepeat = document.getElementById('registroPasswordRepeat').value;

    if (password === passwordRepeat) {
        console.log("Registrando usuario con:", correo, codigo);
        cerrarModal();
    } else {
        alert("Las contraseñas no coinciden");
    }
}

// Asignar la función al objeto global window
window.registrarUsuario = registrarUsuario;