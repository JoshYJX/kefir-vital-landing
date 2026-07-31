export interface IProducto {
  readonly id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
}

export type CategoriaProducto = "lacteo" | "fermentado";