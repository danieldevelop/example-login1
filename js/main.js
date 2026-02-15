"use strict";

const swalMixin = (type, message) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true, 
    });

    Toast.fire({
        icon: type,
        title: message
    });
}


const loginForm = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const loaderContainer = document.getElementById('loader-container');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // let isValid = true;

    if (email.value.trim() === '' || email.value.trim().length === 0) {
        swalMixin('error', 'Debe ingresar su Correo o Usuario');
        // isValid = false;
        return false;
    }

    if (password.value.trim() === '' || password.value.trim().length === 0) {
        swalMixin('error', 'Debe ingresar su Contraseña');
        // isValid = false;
        return false;
    }

    // if (!isValid) {
    //     const loginContainer = document.querySelector('.login-container');
    //     if (loginContainer) {
    //         loginContainer.classList.add('shake');

    //         setTimeout(() => {
    //             loginContainer.classList.remove('shake');
    //         }, 500);
    //     }
    //     return;
    // }

    // Ocultar mensaje de error previo y mostrar el loader
    errorMessage.style.display = 'none';
    loaderContainer.style.display = 'flex';

    // Simular verificación de credenciales
    setTimeout(() => {
        loaderContainer.style.display = 'none';

        if (email.value === 'admin' && password.value === 'admin') {
            // The autentication logic would go here
            console.info('Inicio de sesión exitoso');
            swalMixin('success', 'Inicio de sesión exitoso');
        } else {
            errorMessage.textContent = 'Usuario y Contraseña inconrrectos';
            errorMessage.style.display = 'block';

            document.querySelector('.login-container').classList.add('shake');

            setTimeout(() => {
                document.querySelector('.login-container').classList.remove('shake');
            }, 500);
        }
    }, 1500); // Simula un delay de 1.5 segundos para la verificación de credenciales

});
