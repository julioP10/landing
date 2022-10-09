import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Seccion1Config, Seccion2Config, Seccion3Config, Seccion4Config } from 'src/app/shared/models';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackComponent implements OnInit {

  seccion1 = new Seccion1Config();
  seccion2 = new Seccion2Config();
  seccion3 = new Seccion3Config();
  seccion4 = new Seccion4Config();
  constructor() { }

  ngOnInit(): void {
    
    this.seccion1 = {
      pagina:'Pardo Track',
      botonComienza:'',
      titulo:'Seguimiento de pedidos en tiempo real para tus clientes y tu negocio',
      detalle:'Si cuentas con tu propia flota de repartidores, Justo Track es el complemento perfecto ¡Mantén el control de tus entregas en tiempo real!',
      imagen:'https://uploads-ssl.webflow.com/629671c629e6b6281674cb8b/62bf2a13bdbcd3f502367639_Justo_track.png'
    };

    this.seccion2 = {  
      titulo:'Tu flota complementada con nuestra tecnología', 
      items:[
        {
          icono:'share_location',
          titulo:'Seguimiento',
          detalle:'Visualiza en tiempo real donde están los pedidos de tus clientes'
        },
        {
          icono:'update',
          titulo:'Mayor control',
          detalle:'Ten mayor claridad sobre los hitos y tiempos de entrega de cada reparto'
        },
        {
          icono:'call_end',
          titulo:'Menos llamados',
          detalle:'"¿Donde se encuentra mi pedido?" ¡Evita esa mala experiencia!'
        }, 
        {
          icono:'support_agent',
          titulo:'Soporte',
          detalle:'Equipo de atención para ayudarte a resolver cualquier duda'
        },
      ]
    };

    this.seccion3 = {
      pagina:'Delivery',
      botonComienza:'',
      titulo:'¿No tienes flota propia?',
      detalle:`¡No te preocupes!
      +80.000 repartidores prestan servicio a nuestros partners en Latinoamérica`,
      imagen:'https://uploads-ssl.webflow.com/629671c629e6b6281674cb8b/62be5ea2730d34ddde136096_JustoTrack.png'
    };

    this.seccion4 = {  
      titulo:'¿Tienes dudas? Quizás aquí las podemos resolver', 
      dudas:[
        { 
          titulo:'¿Dónde se ven los hitos de Justo Track respecto de los pedidos?',
          parrafos:['En nuestra plataforma web para administradores. De cara a clientes, pueden verlo en la plataforma web Justo.'], 
        },
        {
          titulo:'¿Justo Track incluye el servicio de delivery?',
          parrafos:['No lo incluye, pero si te lo podemos ofrecer. Por otra parte, si contratas nuestro servicio de Delivery, este sí incluye Justo Track (seguimiento).'], 
        },
        {
          titulo:'¿Qué diferencia tiene el sistema de seguimiento de la plataforma Justo y Justo Track?',
          parrafos:['Ninguno, se utiliza el mismo sistema.'], 
        },
      ]
    };
  }


}
