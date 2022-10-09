import { NgModule } from '@angular/core'; 

import { ProductosRoutingModule } from './productos-routing.module';
import { VendeDirectoComponent } from './views/vende-directo/vende-directo.component';   
import { SharedModule } from 'src/app/shared/shared.module';
import { ECommerceComponent } from './views/e-commerce/e-commerce.component';
import { DeliveryComponent } from './views/delivery/delivery.component';
import { AppPropiaComponent } from './views/app-propia/app-propia.component';
import { CommanderComponent } from './views/commander/commander.component';
import { TrackComponent } from './views/track/track.component';
import { EmailMarketingComponent } from './views/email-marketing/email-marketing.component';
import { AdsComponent } from './views/ads/ads.component'; 
import { CCommerceComponent } from './views/c-commerce/c-commerce.component';
@NgModule({
  declarations: [  
    VendeDirectoComponent,
    ECommerceComponent,
    AppPropiaComponent,
    DeliveryComponent,
    CommanderComponent,
    TrackComponent,
    EmailMarketingComponent,
    CCommerceComponent,
    AdsComponent, 
  ],
  imports: [  
    ProductosRoutingModule, 
    SharedModule, 
  ]
})
export class ProductosModule { }
