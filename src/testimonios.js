// ---------------------------------------------------------------
// POO con JavaScript puro (sin tipos, a propósito): una clase
// modela cada testimonio, y otra administra la sección completa.
// ---------------------------------------------------------------

class Testimonio {
  constructor(nombre, ubicacion, texto) {
    this.nombre = nombre;
    this.ubicacion = ubicacion;
    this.texto = texto;
  }

  // Método que devuelve el HTML de la tarjeta de este testimonio
  aHTML() {
    return `
      <article class="testimonio-tarjeta">
        <p class="testimonio-texto">"${this.texto}"</p>
        <strong class="testimonio-nombre">${this.nombre}</strong>
        <span class="testimonio-ubicacion">${this.ubicacion}</span>
      </article>
    `;
  }
}

// Clase que administra la sección completa de testimonios
class SeccionTestimonios {
  constructor(selector) {
    this.contenedor = document.querySelector(selector);
    this.testimonios = [];
  }

  agregar(testimonio) {
    this.testimonios.push(testimonio);
  }

  render() {
    this.contenedor.innerHTML = this.testimonios
      .map((t) => t.aHTML())
      .join("");
  }
}

// Uso: testimonios reales de clientes de Kéfir Vital
const seccion = new SeccionTestimonios("#testimonios-lista");

seccion.agregar(
  new Testimonio(
    "Mariana López",
    "Guatemala City",
    "Desde que tomo el kéfir todos los días, mi digestión mejoró muchísimo. Se nota que es artesanal."
  )
);

seccion.agregar(
  new Testimonio(
    "Carlos Ramírez",
    "Antigua Guatemala",
    "El queso de kéfir es espectacular, lo unto en pan integral y es mi desayuno favorito."
  )
);

seccion.agregar(
  new Testimonio(
    "Ana Sofía Pineda",
    "Quetzaltenango",
    "La kombucha de té rojo con piña tiene un sabor increíble, y me encanta que sea 100% natural."
  )
);

seccion.render();