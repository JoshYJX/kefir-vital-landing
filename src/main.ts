import "./styles/main.scss";
import { GestorContactos } from "./formulario.js";

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
// Formulario de contacto: ahora gestionado por la clase GestorContactos
// (antes era JS suelto con funciones independientes)
// ---------------------------------------------------------------
const gestor = new GestorContactos("#formulario-contacto", "#error-contacto", "#lista-mensajes");

const btnGuardar = document.querySelector("#guardar-mensajes") as HTMLButtonElement;
btnGuardar?.addEventListener("click", () => gestor.guardarJSON());