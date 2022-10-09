import { Component, OnInit } from '@angular/core';
import { Dudas } from '../e-commerce/e-commerce.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-app-propia',
  templateUrl: './app-propia.component.html',
  styleUrls: ['./app-propia.component.scss'],
  animations: [
    trigger('toggleBox', [
      state(
        'open',
        style({
          height: 'auto',
          minHeight: '90px',
          // backgroundColor: '#061ff0'
          zIndex: '10',
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          // backgroundColor: '#E91E63',
          borderBottom: 'none',
        })
      ),
      transition('open => closed', [animate('.3s')]),
      transition('closed => open', [animate('0.3s')]),
    ]),
  ],
})
export class AppPropiaComponent implements OnInit {
  dudas:Dudas[]=[
    {
      titulo:'¿Qué diferencia tiene con el sitio web e-commerce?',
      parrafos:['La aplicación móvil permite estar más presente con tus clientes, en el medio digital más usado del mundo. La App. será un espejo del sitio web cuando actualices productos, información, imágenes.']
    },
    {
      titulo:'¿Cuánto demora el desarrollo y entrega de la aplicación móvil?',
      parrafos:['La entrega dependerá de la cantidad de productos, fotos e información que contenga. También dependerá del plazo de entrega del material para iniciar el desarrollo. Una vez que tengamos todo disponible nos demoramos pocos días en hacerte la entrega final.']
    },
    {
      titulo:'¿Se puede enviar publicidad o mensajes por la App?',
      parrafos:['Tú tendrás las herramientas y las maquetas para poder crear las publicaciones de manera muy simple e intuitiva. No necesitas ser un experto o un diseñador digital para lograr la campaña que quieres.']
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
