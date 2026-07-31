import { IProducto } from "./tipos.js";

// Clase base abstracta
export abstract class Producto {
  #disponible: boolean = true; // ENCAPSULAMIENTO: campo privado real

  constructor(
    public readonly id: number,
    public nombre: string,
    protected descripcion: string,
    public imagen: string
  ) {}

  get disponible(): boolean {
    return this.#disponible;
  }

  set disponible(valor: boolean) {
    this.#disponible = valor;
  }

  // Método abstracto: cada hija lo implementa distinto (POLIMORFISMO)
  abstract etiquetaCategoria(): string;

  presentar(): string {
    return `${this.nombre}: ${this.descripcion}`;
  }
}

// HERENCIA: ProductoLacteo extiende Producto
export class ProductoLacteo extends Producto {
  #diasRefrigeracion: number; // ENCAPSULAMIENTO

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    imagen: string,
    diasRefrigeracion: number
  ) {
    super(id, nombre, descripcion, imagen);
    this.#diasRefrigeracion = diasRefrigeracion;
  }

  get diasRefrigeracion(): number {
    return this.#diasRefrigeracion;
  }

  // POLIMORFISMO: misma firma que en ProductoFermentado, distinta implementación
  etiquetaCategoria(): string {
    return `Lácteo fermentado — conservar ${this.#diasRefrigeracion} días refrigerado`;
  }
}

// Segunda clase hija: otra implementación del mismo método (POLIMORFISMO)
export class ProductoFermentado extends Producto {
  #saborPrincipal: string; // ENCAPSULAMIENTO

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    imagen: string,
    saborPrincipal: string
  ) {
    super(id, nombre, descripcion, imagen);
    this.#saborPrincipal = saborPrincipal;
  }

  get saborPrincipal(): string {
    return this.#saborPrincipal;
  }

  etiquetaCategoria(): string {
    return `Fermentado artesanal — ${this.#saborPrincipal}`;
  }
}

// Catálogo con tus productos reales, ya usando las clases
export const catalogoProductos: Producto[] = [
  new ProductoLacteo(
    1,
    "Queso de Kéfir",
    "Cremoso, suave y lleno de probióticos vivos. Ideal para untar o acompañar tus comidas favoritas.",
    "images/queso-kefir.png",
    15
  ),
  new ProductoLacteo(
    2,
    "Kéfir Vital Original",
    "Nuestra bebida clásica de kéfir de leche, artesanal y natural, refrigerada para conservar todo su valor probiótico.",
    "images/kefir-botella.png",
    16
  ),
  new ProductoFermentado(
    3,
    "Kombucha Té Rojo con Piña",
    "Refrescante fermentado artesanal, hecho con dedicación. Presentación de 473ml.",
    "images/kombucha.png",
    "Té rojo con piña"
  ),
];