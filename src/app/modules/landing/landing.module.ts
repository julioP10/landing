import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module'; 
import { HomeComponent } from './views/home/home.component';
import { TiendasComponent } from './components/tiendas/tiendas.component'; 
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ 
    HomeComponent, TiendasComponent,  
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,SharedModule
  ]
})
export class LandingModule { }
