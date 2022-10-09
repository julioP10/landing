import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MasterLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
})
export class LayoutModule { }
