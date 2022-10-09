import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Seccion1Config, Seccion2Config, Seccion3Config, Seccion4Config } from 'src/app/shared/models';

@Component({  
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdsComponent implements OnInit {
  seccion1 = new Seccion1Config();
  seccion2 = new Seccion2Config();
  seccion3 = new Seccion3Config();
  seccion4 = new Seccion4Config();
  constructor() { }

  ngOnInit(): void {
    
    this.seccion1 = {
      pagina:'Pardo Ads',
      botonComienza:'',
      titulo:'Impulsa tus ventas con publicidad online',
      detalle:'Pardo Ads es el aliado perfecto para gestionar tus campañas en redes sociales. Simplifica desde el diseño de tus anuncios hasta la ejecución de las campañas en un solo lugar',
      imagen:'https://uploads-ssl.webflow.com/629671c629e6b6281674cb8b/62b627cd3aaf472f85449e07_Hero-Justo-Ads.png'
    };

    this.seccion2 = {  
      titulo:'Aumenta tus clientes con publicidad online', 
      items:[
        {
          icono:'ads_click',
          titulo:'Campañas de Marketing',
          detalle:'Aumenta tus ventas a través de tus campañas gestionadas en un solo lugar'
        },
        {
          icono:'currency_exchange',
          titulo:'Retorno sobre Inversión',
          detalle:'Obtén hasta un 900% de ROAS, aumentando la rentabilidad de tu comercio'
        },
        {
          icono:'leaderboard',
          titulo:'Reportería',
          detalle:'Revisa en tiempo real los resultados de tus campañas y aprende a mejorar los resultados'
        }, 
        {
          icono:'switch_access_shortcut_add',
          titulo:'Mejora continua',
          detalle:'Las segmentaciones de tus campañas irán mejorando y focalizándose en clientes más potenciales'
        },
        {
          icono:'group_add',
          titulo:'Apoyo de Expertos',
          detalle:'Conocimiento y experiencia de nuestro equipo de marketing digital para optimización de tus campañas'
        }, 
        {
          icono:'support_agent',
          titulo:'Equipo de Soporte',
          detalle:'Contarás con un servicio de atención para cualquier duda que tengas respecto de Justo Ads'
        },
      ]
    };

    this.seccion3 = {
      pagina:'Pardo Ads',
      botonComienza:'',
      titulo:'Invierte en publicidad sin cobros de agencias',
      detalle:`Aumentar tus ventas publicitando tu marca y tus productos nunca fue tan simple. Invierte en tus redes sociales de la manera más efectiva`,
      imagen:'https://uploads-ssl.webflow.com/629671c629e6b6281674cb8b/62be68e8b4fe70d631c7910d_Justo_Ads.png'
    };

    this.seccion4 = {  
      titulo:'¿Tienes dudas? Quizás aquí las podemos resolver', 
      dudas:[
        { 
          titulo:'¿Utilizar la herramienta tendrá un cobro extra?',
          parrafos:['No, solamente pagarás lo que cobre cada una de las RR.SS. donde inviertas en publicidad, Justo no cobra por el uso de esta plataforma ni por la asesoría de sus expertos'], 
        },
        {
          titulo:'¿Cómo se distribuirá el monto que invierta?',
          parrafos:['El presupuesto será optimizado para que sea distribuido según el algoritmo en Facebook e Instagram durante los días de vigencia del anuncio'], 
        },
        {
          titulo:'¿Se puede publicar un carrusel o incluir una imagen tipo historia?',
          parrafos:['Sí, ambas alternativas están disponibles. El carrusel te solicitará un mínimo de 3 piezas gráficas por anuncio'], 
        },
      ]
    };
  }


}
