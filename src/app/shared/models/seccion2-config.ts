export class Seccion2Config {
  titulo: string;
  detalle?: string;
  items: ItemsSeccion2Config[];
  constructor() {
    this.titulo = '';
    this.detalle='';
    this.items = [];
  }
}

export class ItemsSeccion2Config {
  icono: string;
  titulo: string;
  detalle: string;
  constructor() {
    this.titulo = '';
    this.detalle = '';
    this.icono = '';
  }
}
