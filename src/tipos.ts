export interface IProducto {
  readonly id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
}

export type CategoriaProducto = "lacteo" | "fermentado";

export interface IContacto {
  readonly id: number;
  nombre: string;
  correo: string;
  mensaje: string;
}

export type Resultado<T> = {
  ok: boolean;
  datos: T;
};