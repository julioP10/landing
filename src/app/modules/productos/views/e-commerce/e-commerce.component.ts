import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
export interface Dudas{
  titulo:string;
  abrir? :boolean;
  parrafos:string[]
}
@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss'],
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
export class ECommerceComponent implements OnInit { 
  dudas:Dudas[]=[
    {
      titulo:'¿Qué significa que sea auto-gestionable?',
      parrafos:['Podrás realizar las modificaciones de productos, imágenes, información, menú y logos de forma autónoma y fácil.']
    },
    {
      titulo:'Ya tengo sitio web, ¿Puedo contratar sólo el carrito de compras?',
      parrafos:['Sí, ¡Es posible! Justo puede apoyarte con la creación del carrito de compra y además integrando las pasarelas de pago para facilitar la venta de tus productos.']
    },
    {
      titulo:'¿Puedo integrar mi sitio web con mi punto de ventas?',
      parrafos:['¡Sin problema! Podemos hacer un sin número de integraciones con las plataformas de tu negocio: POS, Channel Manager, Facebook Shop, ¡y muchísimas más!']
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
