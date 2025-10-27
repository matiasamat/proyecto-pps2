// MENSAJE DEL FORMULARIO CON JS
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // evita que se recargue la página

        const nombre = document.getElementById("nombre").value;
        alert(`Gracias por tu compra, ${nombre}! Te contactamos vía mail.`);
        form.reset(); // limpia los campos
    });

    // FUNCION JS PARA CUANDO CLICKEAS EN COMPRAR VAYA AL FORMULARIO 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = target.getBoundingClientRect().top + window.scrollY - 100; // ajusta según altura del header
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// FUNCION RELOJ
function actualizarReloj() {
    const ahora = new Date();

    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = ahora.toLocaleDateString('es-AR', opcionesFecha);

    const hora = ahora.toLocaleTimeString('es-AR');

    document.getElementById('fecha').textContent = fecha.charAt(0).toUpperCase() + fecha.slice(1);
    document.getElementById('hora').textContent = hora;
}

// actualizar cada segundo
setInterval(actualizarReloj, 1000);
actualizarReloj();