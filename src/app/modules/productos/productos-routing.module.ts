import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AdsComponent } from './views/ads/ads.component';
import { AppPropiaComponent } from './views/app-propia/app-propia.component';
import { CCommerceComponent } from './views/c-commerce/c-commerce.component';
import { CommanderComponent } from './views/commander/commander.component';
import { DeliveryComponent } from './views/delivery/delivery.component';
import { ECommerceComponent } from './views/e-commerce/e-commerce.component';
import { EmailMarketingComponent } from './views/email-marketing/email-marketing.component';
import { TrackComponent } from './views/track/track.component';
import { VendeDirectoComponent } from './views/vende-directo/vende-directo.component';

const routes: Routes = [
  { path: '', redirectTo: 'e-commerce', pathMatch: 'full' },
  { path: 'app-propia', component: AppPropiaComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'e-commerce', component: ECommerceComponent },
  { path: 'vende-directo', component: VendeDirectoComponent },
  { path: 'c-commerce', component: CCommerceComponent },
  { path: 'commander', component: CommanderComponent },
  { path: 'track', component: TrackComponent },
  { path: 'email-marketing', component: EmailMarketingComponent },
  { path: 'ads', component: AdsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
