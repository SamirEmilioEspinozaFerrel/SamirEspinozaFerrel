// scripts.js

// Variable que simula el estado de inicio de sesión
let isLoggedIn = false;

// Función para verificar el estado de inicio de sesión
function checkLoginStatus() {
    if (isLoggedIn) {
        // Usuario ha iniciado sesión, habilita los enlaces y botones de página
        enablePageLinks();
    } else {
        // Usuario no ha iniciado sesión, deshabilita los enlaces y botones de página
        disablePageLinks();
    }
}

// Función para habilitar los enlaces y botones de página
function enablePageLinks() {
    const pageLinks = document.querySelectorAll('nav a, .page-btn');
    pageLinks.forEach(link => {
        link.addEventListener('click', handlePageClick);
        link.classList.remove('disabled');
    });
}

// Función para deshabilitar los enlaces y botones de página
function disablePageLinks() {
    const pageLinks = document.querySelectorAll('nav a, .page-btn');
    pageLinks.forEach(link => {
        link.removeEventListener('click', handlePageClick);
        link.classList.add('disabled');
    });
}

// Manejador de eventos para los clics en enlaces y botones de página
function handlePageClick(event) {
    event.preventDefault();
    const pageId = event.target.id;
    console.log(`Intento de acceso a la página: ${pageId}`);
    // Puedes redirigir a la página correspondiente o realizar otras acciones según sea necesario
}

// Función para simular el inicio de sesión con Google
function simulateGoogleLogin() {
    isLoggedIn = true;
    checkLoginStatus();
}

// Obtén referencia al botón de inicio de sesión
const loginBtn = document.getElementById('login-btn');

// Agrega un evento al botón de inicio de sesión
loginBtn.addEventListener('click', simulateGoogleLogin);

// Verifica el estado de inicio de sesión al cargar la página
window.addEventListener('load', checkLoginStatus);

// Agrega la funcionalidad de desplazamiento
window.addEventListener('wheel', handleWheelScroll);

function handleWheelScroll(event) {
    // Desplazamiento vertical
    window.scrollBy(0, event.deltaY);

    // Desplazamiento horizontal (opcional)
    // window.scrollBy(event.deltaX, 0);
}


