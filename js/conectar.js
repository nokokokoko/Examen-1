// JavaScript source code
// Valida los datos antes de enviar el formulario

var alertaTextoCreado = "";

function conectar() {
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var rut = document.getElementById("rut").value;
    var nombre = document.getElementById("nombre").value;
    var appat = document.getElementById("appat").value;
    var apmat = document.getElementById("apmat").value;
    var edad = document.getElementById("edad").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var re = /\S+@\S+\.\S+/;
    var rege = /^[A-Za-z0-9]*$/
    var resultado = "";

    if (user.length < 5 || user.length >16) {
        resultado += "Usuario debe poseer entre 5 y 16 caracteres<br>"
    }
    if (rege.test(user) == false) {
        resultado+="Usuario no puede tener caracteres especiales<br>"
    }
    if (password.length < 8 || password.length > 32) {
        resultado += "Password debe poseer entre 8 y 32 caracteres<br>"
        }
    if (rege.test(password) == true) {
        resultado+= "Password debe tener al menos un caracter especial<br>"
     }
    if (rut.length < 9 || rut.length > 10) {
        resultado += "Rut incorrecto<br>"
    }
    if (nombre.length < 1 || nombre.length > 20) {
        resultado += "Ingrese un nombre real<br>"
    }
    if (appat.length < 1 || appat.length > 30) {
        resultado += "Ingrese un apellido paterno real<br>"
    }
    if (apmat.length < 1 || apmat.length > 30) {
        resultado += "Ingrese un apellido materno real<br>"
    }
    if (edad.length < 2 || edad.length > 3 || parseInt(edad, 10) < 14) {
        resultado += "Edad invalida. Debe ser mayor de 14 para registrarse.<br>"
    }
    if (genero.length == 0) {
        resultado += "Genero no puede estar vacio<br>"
    }
    if (re.test(email) == false) {
        resultado += "Ingrese nuevamente su correo<br>"
    }
    if (document.getElementById('termsofService').checked) {
    } else {
        resultado += "Debe aceptar los terminos y condiciones.<br>"
    }
    if (resultado == "") {
        resultado = "Datos Validos!";
        mostrarAlertaPositiva(resultado);
    }
    else {
        mostrarAlertaNegativa(resultado)
        
    }
}

function mostrarAlertaNegativa(resultado) {
    if (alertaTextoCreado != null) {
        var alertaTexto = document.createElement('div');
        alertaTexto.classList.add('alert', 'alert-danger');
        alertaTexto.setAttribute('role', 'alert');
        alertaTexto.innerHTML = resultado;
        var container = document.querySelector('.container');
        container.insertBefore(alertaTexto, container.firstChild);
        alertaTextoCreado = null;
        setTimeout(function () {
            alertaTexto.remove();
            alertaTextoCreado = "";
        }, 10000);

    }
}

function mostrarAlertaPositiva(resultado) {
    if (alertaTexto != null) {
        var alertaTexto = document.createElement('div');
        alertaTexto.classList.add('alert', 'alert-success');
        alertaTexto.setAttribute('role', 'alert');
        alertaTexto.innerHTML = resultado;
        var container = document.querySelector('.container');
        container.insertBefore(alertaTexto, container.firstChild);
        alertaTextoCreado = null;
        setTimeout(function () {
            alertaTexto.remove();
            alertaTextoCreado = "";
        }, 3000);

    }
}