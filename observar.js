const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".oculto").forEach((el) => {
  observador.observe(el);
});

// ---------------------------------------------------------------
// Formulario de contacto (lógica "suelta", sin tipos ni clases).
// Esto se migrará a TypeScript + POO (clase GestorContactos) más
// adelante en la actividad.
// ---------------------------------------------------------------
const formularioContacto = document.querySelector("#formulario-contacto");
const errorContacto = document.querySelector("#error-contacto");

function validarFormulario(nombre, correo, mensaje) {
  if (nombre.trim().length < 3) {
    return "El nombre debe tener al menos 3 caracteres.";
  }
  if (!correo.includes("@")) {
    return "Ingresa un correo electrónico válido.";
  }
  if (mensaje.trim().length < 5) {
    return "El mensaje es demasiado corto.";
  }
  return "";
}

formularioContacto.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const correo = document.querySelector("#correo").value;
  const mensaje = document.querySelector("#mensaje").value;

  const errorEncontrado = validarFormulario(nombre, correo, mensaje);

  if (errorEncontrado) {
    errorContacto.textContent = errorEncontrado;
    return;
  }

  errorContacto.textContent = "";
  alert(`¡Gracias, ${nombre}! Recibimos tu mensaje y te contactaremos a ${correo}.`);
  formularioContacto.reset();
});