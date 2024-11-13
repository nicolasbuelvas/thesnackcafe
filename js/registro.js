// registro.js

function registrarUsuario(event) {
    event.preventDefault();
    const correo = document.getElementById('registroCorreo').value;
    const codigo = document.getElementById('registroCodigo').value;
    const password = document.getElementById('registroPassword').value;
    const passwordRepeat = document.getElementById('registroPasswordRepeat').value;

    if (password === passwordRepeat) {
        // Lógica para registrar al usuario
        console.log("Registrando usuario con:", correo, codigo);
        cerrarModal();
    } else {
        alert("Las contraseñas no coinciden");
    }
}