import { Component, OnInit } from '@angular/core';
import { TestimonioConfig } from 'src/app/shared/components/testimonio/testimonio.config';
import { GlideConfig } from '../../../../shared/components/glide/glide.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  settings = new GlideConfig();
  testimonioConfig = new TestimonioConfig();
  constructor() { }

  ngOnInit(): void {
    this.settings.perView = 12;
    this.settings.animationDuration = 1500;
    this.settings.autoplay = 1;
    this.settings.type = 'carousel'; 
    this.settings.hoverpause= true;
    // this.settings.breakpoints = { '320': { perView: 2.25 }, '568': { perView: 3.25 } };
    this.settings.breakpoints = { '320': { perView: 2.25 }, '568': { perView: 2.25 } }; 

    // testimonios
    this.testimonioConfig =  {
      titulo: 'Nuestros partners hablan por nosotros',
      testimonmios:[
        {
          parrafo:`"La plataforma de Justo no tan solo nos ayudó en nuestro nuevo modelo de negocio, si no que nos permitió llegar más allá, siendo hoy reconocidos como una nueva apuesta y una de las marcas más reconocidas en la categoría heladerías en el formato delivery. Realmente su equipo de trabajo se siente como un partner que no se queda con lo que está o tiene, si no que siempre mira hacia el futuro y sigue aplicando mejoras continúas. Creo que esa es la clave por la que seguimos creciendo juntos".
          `,
          nombre:'Felipe Nasser',
          especializacion:'Product Manager E-commerce Bravissimo',
          foto:'https://uploads-ssl.webflow.com/629671c629e6b6281674cb8b/629671c629e6b63aaa74cc57_PERFIL_01.png'
        },
        {
          parrafo:`""Para nosotros Justo es mucho más que una empresa de tecnología. Es el partner que nos apoya en los momentos más difíciles, trae nuevas ideas para aumentar las ventas y nos permite tener en una misma plataforma información de los clientes. Con ellos, tenemos el control de nuestro negocio. Recomiendo a Justo no solo por ser una plataforma con el mejor soporte e información de clientes. En mi opinión, Justo se convierte en parte fundamental de nuestro crecimiento".`,
          nombre:'Jose Buergo',
          especializacion:'Encargado de Tecnología & Delivery Fukai SpA',
          foto:'https://uploads-ssl.webflow.com/629671c629e6b6281674cb8b/629671c629e6b6060d74cc56_PERFIL_02.png'
        }, 
      ]
    };
  }

}
