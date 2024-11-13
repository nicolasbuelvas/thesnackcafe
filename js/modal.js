// Selección de modales
const modalLogin = document.getElementById("modal-login");
const modalRegistro = document.getElementById("modal-registro");

// Abrir modal de inicio de sesión
function abrirModalLogin() {
    modalRegistro.classList.remove("mostrar"); // Cierra el modal de registro si está abierto
    modalLogin.classList.add("mostrar");       // Muestra el modal de inicio de sesión
}

// Abrir modal de registro
function abrirModalRegistro() {
    modalLogin.classList.remove("mostrar");    // Cierra el modal de inicio de sesión si está abierto
    modalRegistro.classList.add("mostrar");    // Muestra el modal de registro
}

// Cerrar cualquier modal
function cerrarModal() {
    modalLogin.classList.remove("mostrar");
    modalRegistro.classList.remove("mostrar");
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modalLogin) {
        cerrarModal();
    }
    if (event.target == modalRegistro) {
        cerrarModal();
    }
}

// Asignar las funciones al objeto global window
window.abrirModalLogin = abrirModalLogin;
window.abrirModalRegistro = abrirModalRegistro;
window.cerrarModal = cerrarModal;