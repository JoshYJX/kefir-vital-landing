// ---------------------------------------------------------------
// Observador de scroll: anima las secciones .oculto al aparecer
// ---------------------------------------------------------------
const observador = new IntersectionObserver((entradas: IntersectionObserverEntry[]) => {
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
// Formulario de contacto (ahora tipado con TypeScript)
// ---------------------------------------------------------------
const formularioContacto = document.querySelector("#formulario-contacto") as HTMLFormElement;
const errorContacto = document.querySelector("#error-contacto") as HTMLElement;

function validarFormulario(nombre: string, correo: string, mensaje: string): string {
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

formularioContacto.addEventListener("submit", (evento: Event) => {
  evento.preventDefault();

  const nombreInput = document.querySelector("#nombre") as HTMLInputElement;
  const correoInput = document.querySelector("#correo") as HTMLInputElement;
  const mensajeInput = document.querySelector("#mensaje") as HTMLTextAreaElement;

  const nombre = nombreInput.value;
  const correo = correoInput.value;
  const mensaje = mensajeInput.value;

  const errorEncontrado = validarFormulario(nombre, correo, mensaje);

  if (errorEncontrado) {
    errorContacto.textContent = errorEncontrado;
    return;
  }

  errorContacto.textContent = "";
  alert(`¡Gracias, ${nombre}! Recibimos tu mensaje y te contactaremos a ${correo}.`);
  formularioContacto.reset();
});