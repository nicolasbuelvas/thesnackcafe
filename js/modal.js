// modal.js

function abrirModalLogin() {
    document.getElementById('modal-login').style.display = 'flex';
}

function abrirModalRegistro() {
    document.getElementById('modal-registro').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal-login').style.display = 'none';
    document.getElementById('modal-registro').style.display = 'none';
}