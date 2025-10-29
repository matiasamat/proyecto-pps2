// CLASE USUARIO (POO)
// -------------------------------
class Usuario {
    constructor(nombre, genero, telefono, email, mensaje) {
        this.nombre = nombre;
        this.genero = genero;
        this.telefono = telefono;
        this.email = email;
        this.mensaje = mensaje;
        this.fechaRegistro = new Date().toLocaleString('es-AR');
    }
}

// -------------------------------
// CLASE FORMULARIO
// -------------------------------
class FormularioContacto {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.init();
    }

    init() {
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const genero = document.getElementById("genero").value;
        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !genero || !telefono || !email) {
            alert("Por favor completá todos los campos obligatorios.");
            return;
        }

        const nuevoUsuario = new Usuario(nombre, genero, telefono, email, mensaje);
        this.guardarEnLocalStorage(nuevoUsuario);

        alert(`Gracias por tu compra, ${nombre}! Te contactaremos vía mail.`);

        this.form.reset();
    }

    guardarEnLocalStorage(usuario) {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
}

// -------------------------------
// CLASE SCROLL SUAVE
// -------------------------------
class ScrollSuave {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.scrollHandler(e, anchor));
        });
    }

    scrollHandler(e, anchor) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            const offset = target.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    }
}

// -------------------------------
// CLASE RELOJ
// -------------------------------
class Reloj {
    constructor(fechaId, horaId) {
        this.fechaElem = document.getElementById(fechaId);
        this.horaElem = document.getElementById(horaId);
        this.actualizar();
        setInterval(() => this.actualizar(), 1000);
    }

    actualizar() {
        const ahora = new Date();
        const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const fecha = ahora.toLocaleDateString('es-AR', opcionesFecha);
        const hora = ahora.toLocaleTimeString('es-AR');
        this.fechaElem.textContent = fecha.charAt(0).toUpperCase() + fecha.slice(1);
        this.horaElem.textContent = hora;
    }
}

// -------------------------------
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {
    new FormularioContacto("form-contacto");
    new ScrollSuave();
    new Reloj("fecha", "hora");
});
