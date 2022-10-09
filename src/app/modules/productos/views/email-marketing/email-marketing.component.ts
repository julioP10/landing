import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Seccion1Config, Seccion2Config, Seccion3Config, Seccion4Config } from 'src/app/shared/models';
@Component({
  selector: 'app-email-marketing',
  templateUrl: './email-marketing.component.html',
  styleUrls: ['./email-marketing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailMarketingComponent implements OnInit {

  seccion1 = new Seccion1Config();
  seccion2 = new Seccion2Config();
  seccion3 = new Seccion3Config();
  seccion4 = new Seccion4Config();
  constructor() { }

  ngOnInit(): void {
    
    this.seccion1 = {
      pagina:'Email marketing',
      botonComienza:'',
      titulo:'Fideliza a tus clientes, impulsa tus ventas',
      detalle:'Mantener una comunicación fluida con tus clientes es un requisito indispensable si quieres que sean fieles a tu marca. Gestiona tus propias campañas de email',
      imagen:'https://uploads-ssl.webflow.com/629671c629e6b6281674cb8b/62b627cd896b324d6af6e07a_Hero-email-marketing.png'
    };

    this.seccion2 = {  
      titulo:'Realiza envíos masivos de email a tus clientes', 
      items:[
        {
          icono:'trending_up',
          titulo:'Impulsa tus ventas',
          detalle:'Realiza campañas de email a tus clientes para incentivar la compra de tus productos'
        },
        {
          icono:'smart_toy',
          titulo:'Envíos automatizados',
          detalle:'Crea correos que se envíen automáticamente en base a ciertos comportamientos de tus clientes'
        },
        {
          icono:'leaderboard',
          titulo:'Segmentación de clientes',
          detalle:'Según las características de tus clientes, crea envíos de correos dirigidos'
        }, 
        {
          icono:'folder_shared',
          titulo:'Base de Datos',
          detalle:'Son tus clientes y por tanto es tu BDD la cual podrás gestionar como quieras'
        },
        {
          icono:'settings',
          titulo:'Autogestión',
          detalle:'La plataforma de Email Marketing es simple e intuitiva de usar'
        }, 
        {
          icono:'support_agent',
          titulo:'Soporte',
          detalle:'Equipo de atención para resolver cualquier duda que tengas sobre la herramienta'
        },
      ]
    };

    this.seccion3 = {
      pagina:'Email Marketing',
      botonComienza:'',
      titulo:'Comunícate directamente con tus clientes vía Email',
      detalle:`Las diversas comunicaciones que puedes generar en base a distintos comportamientos de tus clientes te ayudarán a mantener a aumentar tus ventas`,
      imagen:'https://uploads-ssl.webflow.com/629671c629e6b6281674cb8b/62bf105b449e1d6262bd7604_Email_marketing.png'
    };

    this.seccion4 = {  
      titulo:'¿Tienes dudas? Quizás aquí las podemos resolver', 
      dudas:[
        { 
          titulo:'¿Desde donde se gestiona la herramienta?',
          parrafos:['Esta herramienta se gestiona desde la plataforma web para administradores de comercio de Justo: admin.getjusto.com','Es muy simple e intuitiva de usar.'], 
        },
        {
          titulo:'¿Cómo puedo aprender a usar la plataforma?',
          parrafos:['Contamos con distintos videos tutoriales y un equipo de inducción que te ayudarán a perfeccionar su uso.'], 
        },
        {
          titulo:'¿Cómo es posible segmentar las bases de datos de mis clientes?',
          parrafos:['Esta plataforma contiene ciertos parámetros pre establecidos que te permitirán identificar distintos tipos de clientes según ciertos comportamientos.'], 
        },
      ]
    };
  }


}
