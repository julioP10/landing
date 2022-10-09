export class TestimonioConfig {
  titulo: string;
  testimonmios:TestimonioPersonaConfig[];
  constructor() { 
    this.titulo = '';
    this.testimonmios = [];
  }
}
export class TestimonioPersonaConfig {
  parrafo: string; 
  foto: string;
  nombre: string;
  especializacion: string;
  constructor() {
    this.foto = '';
    this.nombre = '';
    this.especializacion = '';
    this.parrafo = '';
  }
}
