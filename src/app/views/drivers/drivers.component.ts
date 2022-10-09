import { Component, OnInit } from '@angular/core';
import { GlideConfig } from 'src/app/shared/components/glide/glide.config';
import { Seccion1Config, Seccion2Config, Seccion3Config, Seccion4Config } from 'src/app/shared/models';
@Component({
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  settings = new GlideConfig(); 
  seccion1 = new Seccion1Config();
  seccion2 = new Seccion2Config();
  seccion3 = new Seccion3Config();
  seccion4 = new Seccion4Config();
  loadingTestimonio = true;
  constructor() { }

  ngOnInit(): void {
    this.loadingTestimonio = true;
    this.settings.perView = 1;
    this.settings.animationDuration = 1500;
    this.settings.autoplay = 0;
    this.settings.type = 'carousel'; 
    this.settings.hoverpause= true;
    // this.settings.breakpoints = { '320': { perView: 2.25 }, '568': { perView: 3.25 } };
    this.settings.breakpoints = { '320': { perView: 2.25 }, '568': { perView: 2.25 } }; 

    this.seccion1 = {
      pagina:'Únete',
      botonComienza:'',
      titulo:'Sé Driver y gana dinero siendo tu propio jefe',
      detalle:'Descarga la app, completa tu registro y comienza hoy.',
      imagen:'https://uploads-ssl.webflow.com/629671c629e6b6281674cb8b/62cc8c79e2534d05d1b1dc47_Hero%20Se%20driver%2001.png'
    };

    this.seccion2 = {  
      titulo:'Realiza entregas a +10.000 comercios en 6 países', 
      detalle:'Sólo necesitas tener un medio de transporte (bici, auto o moto) y un celular inteligente',
      items:[
        {
          icono:'paid',
          titulo:'Propinas',
          detalle:'El 100% de la propina de los despachos siempre será tuya'
        },
        {
          icono:'handshake',
          titulo:'Comisión',
          detalle:'El 100% de la comisión por despacho siempre será tuya'
        },
        {
          icono:'trending_up',
          titulo:'Tarifa Dinámica',
          detalle:'En horarios punta las comisiones serán más altas'
        }, 
        {
          icono:'support_agent',
          titulo:'Equipo de Soporte',
          detalle:'Contarás con un equipo para apoyarte a través de la app.'
        },
        {
          icono:'calendar_month',
          titulo:'Pagos',
          detalle:'Los pagos por tus entregas se realizan semanalmente'
        },
        {
          icono:'timer',
          titulo:'Tus tiempos',
          detalle:'Sé tu propio jefe y conéctate cuando tu quieras'
        }, 
       
      ]
    };

    this.seccion3 = {
      pagina:'',
      botonComienza:'',
      isDownLoad:true,
      titulo:'Comienza en 3 simples pasos',
      detalle:`Descarga la App aquí`,
      imagen:'https://uploads-ssl.webflow.com/629671c629e6b6281674cb8b/62b3d53ebabdc3e542626d65_hero_drivers_02.png'
    };

    this.seccion4 = {  
      titulo:'¿Tienes dudas? Quizás aquí las podemos resolver', 
      dudas:[
        { 
          titulo:'¿Necesito maleta o mochila de Justo para hacer entregas?',
          parrafos:['Puedes usar cualquier maleta para transportar los alimentos, lo importante es que puedan mantener la temperatura de los alimentos.'], 
        },
        {
          titulo:'¿Dónde recibo las ganancias de los pedidos?',
          parrafos:['El pago se hace todas las semanas, entre el miércoles y viernes.'], 
        },
        {
          titulo:'¿Cómo y cuándo debes conectarte?',
          parrafos:['Puedes conectarte en cualquier momento, pero mientras más tiempo estés conectado, tienes más oportunidades de aumentar tus ingresos. En la app podrás ver un mapa con las zonas de cobertura en tu ciudad. Los puntos en rojo del mapa te mostrarán en qué parte hay más pedidos en cierto momento. Las horas de mayor demanda son desayuno, almuerzo y cena, y los fines de semana.'], 
        },
        {
          titulo:'¿Es obligatorio aceptar todos los pedidos?',
          parrafos:['No es obligatorio aceptar todos los pedidos, pero la app te irá priorizando en la medida que tomes más pedidos para aumentar tus ingresos.'], 
        },
      ]
    };
    setTimeout(() => {
      this.loadingTestimonio = false;
    }, 500);
  }


}
