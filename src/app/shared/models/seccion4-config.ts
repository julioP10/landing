export class Seccion4Config { 
  titulo: string;   
  dudas:ItemDudasConfig[];
  constructor() { 
    this.titulo = '';  
    this.dudas=[];
  }
}

export class ItemDudasConfig {
  titulo: string;
  abrir?: boolean;
  parrafos: string[];
  constructor() {
    this.titulo = '';
    this.abrir = false;
    this.parrafos = [];
  }
}
