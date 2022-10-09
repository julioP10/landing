import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ProductosModule } from './modules/productos/productos.module';
import { SharedModule } from './shared/shared.module';
import { DriversComponent } from './views/drivers/drivers.component';
@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
  ],
  imports: [ 
    AppRoutingModule,
    LayoutModule, 
    BrowserModule,
    CommonModule,
    RouterModule,
    LayoutModule, 
    SharedModule,
    BrowserAnimationsModule,
    ProductosModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
