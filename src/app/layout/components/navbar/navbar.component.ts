import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
export interface MenuItem {
  modulo?: string;
  url: string;
  id: number;
  nombre: string;
  icono: string;
  nuevo?: boolean;
  items?: MenuItem[];
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('toggleBox', [
      state(
        'open',
        style({
          height: '301px',
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
export class NavbarComponent implements OnInit, AfterViewInit {
  isMobile = window.innerWidth < 768;
  openMenuMobile = false;
  menuItems:MenuItem[]=[
    {
      id:1,
      modulo: 'Vende Directo',
      icono:'',
      nombre:'Vende Directo', 
      url:'',
      items:[
        {
          id:1, 
          icono:'shopping_cart',
          nombre:'E-commerce', 
          url:'/productos/e-commerce',
        },
        {
          id:2, 
          icono:'app_shortcut',
          nombre:'App propia', 
          url:'/productos/app-propia',
        },
        {
          id:3, 
          icono:'security_update_good',
          nombre:'C-commerce', 
          url:'/productos/c-commerce',
          nuevo:true
        }, {
          id:4, 
          icono:'support_agent',
          nombre:'Pardo Commander', 
          url:'/productos/commander', 
          nuevo:true
        },
        {
          id:5, 
          icono:'qr_code_2',
          nombre:'QR 2.0', 
          url:'',
          nuevo:true
        }
      ]
    },
    {
      id:2,
      modulo: 'Despacho a domicilio',
      icono:'',
      nombre:'Despacho a domicilio', 
      url:'',
      items:[
        {
          id:1, 
          icono:'sports_motorsports',
          nombre:'Delivery', 
          url:'/productos/delivery', 
        },
        {
          id:2, 
          icono:'map',
          nombre:'Pardo Track', 
          url:'/productos/track', 
        }, 
      ]
    },
    {
      id:3,
      modulo: 'Aumenta tus ventas',
      icono:'',
      nombre:'Aumenta tus ventas', 
      url:'',
      items:[
        {
          id:1, 
          icono:'mail',
          nombre:'Email marketing', 
          url:'/productos/email-marketing', 
        },
        {
          id:2, 
          icono:'ads_click',
          nombre:'Pardo Ads', 
          url:'/productos/ads', 
          nuevo:true
        }, 
      ]
    }
  ];
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // const menu:HTMLElement = document.getElementById('productos')!;
    // if(menu){
    //   menu.onm
    // }
  }

  openMenu = false;
  openMenuProductMobile = false;
  open(menu: HTMLElement | null, navmenu: HTMLElement, iconNav: HTMLElement) {
    // menu.classList.toggle('w--open');
    this.openMenu = !this.openMenu;
    if (this.openMenu) {
      // menu.style.opacity = '1';
      navmenu.style.zIndex = '';
      iconNav.style.transform =
        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)';
    } else {
      // menu.style.opacity = '0';
      navmenu.style.zIndex = '901';
      iconNav.style.transform =
        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
    }
  }
  close(menu: HTMLElement, navmenu: HTMLElement, iconNav: HTMLElement) {
    menu.classList.remove('w--open');
    menu.style.opacity = '0';
    navmenu.style.zIndex = '901';
    iconNav.style.transform =
      'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
  }
}
