import { Resultado } from "./tipos.js";

// Clase que representa un mensaje individual recibido
export class Mensaje {
  #fecha: string; // ENCAPSULAMIENTO: privado real

  constructor(
    public readonly id: number,
    public nombre: string,
    public correo: string,
    private contenido: string
  ) {
    this.#fecha = new Date().toLocaleDateString();
  }

  get fecha(): string {
    return this.#fecha;
  }

  get texto(): string {
    return this.contenido;
  }

  resumen(): string {
    return `${this.nombre} (${this.correo}) — ${this.#fecha}: "${this.contenido}"`;
  }
}

// Clase que gestiona el formulario completo: validación, estado y JSON
export class GestorContactos {
  #mensajes: Mensaje[] = [];
  #siguienteId: number = 1;
  #form: HTMLFormElement;
  #error: HTMLElement;
  #lista: HTMLElement;

  constructor(formSelector: string, errorSelector: string, listaSelector: string) {
    this.#form = document.querySelector(formSelector) as HTMLFormElement;
    this.#error = document.querySelector(errorSelector) as HTMLElement;
    this.#lista = document.querySelector(listaSelector) as HTMLElement;

    this.#form.addEventListener("submit", (e) => this.#alEnviar(e));
  }

  // Función tipada de validación
  #validar(nombre: string, correo: string, mensaje: string): Resultado<string> {
    if (nombre.trim().length < 3) {
      return { ok: false, datos: "El nombre debe tener al menos 3 caracteres." };
    }
    if (!correo.includes("@")) {
      return { ok: false, datos: "Ingresa un correo electrónico válido." };
    }
    if (mensaje.trim().length < 5) {
      return { ok: false, datos: "El mensaje es demasiado corto." };
    }
    return { ok: true, datos: "" };
  }

  #alEnviar(evento: Event): void {
    evento.preventDefault();

    const datos = Object.fromEntries(new FormData(this.#form));
    const nombre = String(datos.nombre ?? "");
    const correo = String(datos.correo ?? "");
    const mensaje = String(datos.mensaje ?? "");

    const validacion = this.#validar(nombre, correo, mensaje);
    if (!validacion.ok) {
      this.#error.textContent = validacion.datos;
      return;
    }

    this.#error.textContent = "";
    this.#mensajes.push(new Mensaje(this.#siguienteId++, nombre, correo, mensaje));
    this.#render();
    this.#form.reset();
    alert(`¡Gracias, ${nombre}! Recibimos tu mensaje y te contactaremos a ${correo}.`);
  }

  #render(): void {
    this.#lista.innerHTML = "";
    this.#mensajes.forEach((mensaje) => {
      const li = document.createElement("li");
      li.textContent = mensaje.resumen(); // usa el método propio de la clase
      this.#lista.append(li);
    });
  }

  // Guardar en JSON
  guardarJSON(): void {
    if (this.#mensajes.length === 0) {
      alert("Todavía no hay mensajes para descargar.");
      return;
    }

    const datosPlanos = this.#mensajes.map((m) => ({
      id: m.id,
      nombre: m.nombre,
      correo: m.correo,
      mensaje: m.texto,
      fecha: m.fecha,
    }));

    const json = JSON.stringify(datosPlanos, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mensajes-contacto.json";
    a.click();
  }
}