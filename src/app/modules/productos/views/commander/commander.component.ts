import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Seccion1Config, Seccion2Config, Seccion3Config, Seccion4Config } from 'src/app/shared/models';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommanderComponent implements OnInit {
  seccion1 = new Seccion1Config();
  // seccion2 = new Seccion2Config();
  // seccion3 = new Seccion3Config();
  // seccion4 = new Seccion4Config();
  constructor() { }

  ngOnInit(): void {
    
    this.seccion1 = {
      pagina:'Pardo Commander',
      botonComienza:'',
      botonUnete:'¿No eres cliente? Únete ',
      titulo:'Captura más ventas, mejora tu operación',
      detalle:'Ahorra tiempo y energía a la hora de vender por teléfono, whatsapp y/o en el local, al integrar tus pedidos a un solo flujo de venta y delivery.',
      imagen:'https://uploads-ssl.webflow.com/629671c629e6b6281674cb8b/62ceea81e3d99badfd23507a_hero_JustoCommander.png'
    };

    // this.seccion2 = {  
    //   titulo:'Tu canal de ventas online a un WhatsApp de distancia', 
    //   items:[
    //     {
    //       icono:'sentiment_satisfied',
    //       titulo:'Automatizado',
    //       detalle:'Operado por un BOT que funciona sin descanso en los horarios de tu comercio'
    //     },
    //     {
    //       icono:'alternate_email',
    //       titulo:'Mensajes personalizables',
    //       detalle:'Dale identidad propia a los mensajes de acorde a a la personalidad de tu marca'
    //     },
    //     {
    //       icono:'credit_score',
    //       titulo:'Pasarela de pagos',
    //       detalle:'Logra que tus clientes paguen de manera simple instruccionados por el BOT'
    //     },
    //     {
    //       icono:'folder_shared',
    //       titulo:'Gestión de BBDD',
    //       detalle:'La información de tus clientes en un solo lugar y fácil de gestionar'
    //     },
    //     {
    //       icono:'leaderboard',
    //       titulo:'Reportería',
    //       detalle:'Los indicadores y resultados más importantes de tu negocio'
    //     },
    //     {
    //       icono:'support_agent',
    //       titulo:'Soporte',
    //       detalle:'Servicio de atención para cualquier requerimiento que tengas'
    //     },
    //   ]
    // };

    // this.seccion3 = {
    //   pagina:'C-commerce',
    //   botonComienza:'',
    //   titulo:'igitalízate y aumenta las ventas de tu comercio',
    //   detalle:'Desarrollamos un BOT con una conversación absolutamente automatizada, donde tus clientes podrán hacer el proceso de compra de principio a fin desde su WhatsApp',
    //   imagen:'https://uploads-ssl.webflow.com/629671c629e6b6281674cb8b/62bdde0fd8827e14902f0e6f_C-commerce.png'
    // };

    // this.seccion4 = {  
    //   titulo:'¿Tienes dudas? Quizás aquí las podemos resolver?', 
    //   dudas:[
    //     { 
    //       titulo:'¿Puedo usar un número de teléfono que ya tengo activo?',
    //       parrafos:['Esta opción no es posible. Para activar el C-Commerce se requiere un número nuevo, el cual Justo se encarga de adquirir'], 
    //     },
    //     {
    //       titulo:'¿Existe alguna restricción por la que no pueda activar el C-Commerce',
    //       parrafos:['Whatsapp tiene sus propias políticas que pueden impedir la activación de un número de Whatsapp Business. Por ejemplo, no está permitida la venta de bebidas alcohólicas.'], 
    //     },
    //     {
    //       titulo:'¿Tendré que responder mensajes en algún momento?',
    //       parrafos:['No será necesario que una persona intervenga el chat para responder mensajes. Todo es automatizado.'], 
    //     },
    //   ]
    // };
  }
}
