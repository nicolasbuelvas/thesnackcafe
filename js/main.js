const regexCorreo = /^[a-zA-Z0-9._%+-]+@u\.icesi\.edu\.co$/;
const regexCodigo = /^[A-Za-z]{1}[0-9]{8}$/;

function abrirModalLogin() {
    cerrarModal();
    document.getElementById('modal-login').style.display = 'flex';
}

function abrirModalRegistro() {
    cerrarModal();
    document.getElementById('modal-registro').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal-login').style.display = 'none';
    document.getElementById('modal-registro').style.display = 'none';
}

function iniciarSesion(event) {
    event.preventDefault();
    const correo = document.getElementById('loginCorreo').value;
    const password = document.getElementById('loginPassword').value;
    const usuarioGuardado = JSON.parse(localStorage.getItem(correo));

    if (usuarioGuardado && usuarioGuardado.password === password) {
        alert('Sesión iniciada correctamente');
        cerrarModal();
        sessionStorage.setItem('usuario', JSON.stringify({ correo }));
    } else {
        alert('Correo o contraseña incorrectos');
    }
}

function registrarUsuario(event) {
    event.preventDefault();
    const correo = document.getElementById('registroCorreo').value;
    const codigo = document.getElementById('registroCodigo').value;
    const password = document.getElementById('registroPassword').value;
    const passwordRepeat = document.getElementById('registroPasswordRepeat').value;

    if (!regexCorreo.test(correo)) {
        alert('El correo debe pertenecer a u.icesi.edu.co');
        return;
    }

    if (!regexCodigo.test(codigo)) {
        alert('El código debe tener 9 caracteres: 1 letra y 8 números.');
        return;
    }

    if (password !== passwordRepeat) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const usuario = {
        correo: correo,
        codigo: codigo,
        password: password
    };

    localStorage.setItem(correo, JSON.stringify(usuario));
    alert('Usuario registrado exitosamente');
    cerrarModal();
}

function irInicio() {
    window.location.href = "index.html";
}