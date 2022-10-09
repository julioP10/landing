import { Component, OnInit } from '@angular/core';
import { Seccion1Config, Seccion2Config, Seccion3Config, Seccion4Config } from 'src/app/shared/models';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  seccion1 = new Seccion1Config();
  seccion2 = new Seccion2Config(); 
  seccion4 = new Seccion4Config();
  constructor() { }

  ngOnInit(): void {
    
    this.seccion1 = {
      pagina:'Delivery',
      botonComienza:'',
      titulo:'Entrega tus pedidos inmediatamente con reparto a domicilio',
      detalle:'+ de 80 mil repartidores en Latinoamérica ofrecen servicios a través de Justo para poder entregar tus productos en el menor tiempo posible.',
      imagen:'https://uploads-ssl.webflow.com/629671c629e6b6281674cb8b/62b627ce33f7205486f9b833_Hero-Driver.png'
    };

    this.seccion2 = {  
      titulo:'Tú vendes, nosotros entregamos', 
      items:[
        {
          icono:'description',
          titulo:'Registro de entregas',
          detalle:'Operado por un BOT que funciona sin descanso en los horarios de tu comercio'
        },
        {
          icono:'share_location',
          titulo:'Seguimiento del pedido',
          detalle:'Visualiza en tiempo real el estado de las entregas a tus clientes'
        },
        {
          icono:'support_agent',
          titulo:'Soporte',
          detalle:'Servicio de atención para cualquier que tengas duda respecto de Justo'
        }, 
      ]
    };
 
    this.seccion4 = {  
      titulo:'¿Tienes dudas? Quizás aquí las podemos resolver?', 
      dudas:[
        { 
          titulo:'¿Qué diferencia tiene Justo con los otros agregadores o aplicaciones de delivery?',
          parrafos:['Justo es un canal directo en el cual potenciamos tu marca. Tu marca es la protagonista y que tus clientes te reconozcan a ti y no a nosotros.'], 
        },
        {
          titulo:'¿Justo sólo funciona como entregas a domicilio o delivery?',
          parrafos:['No, además ofrecemos varios productos que potenciarán tanto tu canal de ventas digital como el presencial. Puedes revisarlos todos en el menú en la parte superior de esta página.'], 
        },
        {
          titulo:'¿Cuentan con autos también que realicen delivery?',
          parrafos:['Contamos con una amplia flota principalmente de motoristas y ciclistas. Aún así, también tenemos repartidos con autos.'], 
        },
      ]
    };
  }

}
