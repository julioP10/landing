import { NgModule } from '@angular/core';
import {
  ExtraOptions,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router'; 
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';
import { DriversComponent } from './views/drivers/drivers.component';

// const routerOptions: ExtraOptions = {
//   scrollPositionRestoration: 'enabled',
//   anchorScrolling: 'enabled',
//   scrollOffset: [0, 64],
//   useHash: true, 
//   preloadingStrategy: PreloadAllModules,
// };

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },  
    // { path: '404', component: NotFoundComponent },
    {
      canActivate: [],
      path: '',
      component: MasterLayoutComponent,
      children: [
        {
          path: 'drivers', 
          component:DriversComponent
        },   
      ],
    },
  {
    canActivate: [],
    path: '',
    component: MasterLayoutComponent,
    children: [
      {
        path: 'landing',
        loadChildren: () => import('./modules/landing/landing.module').then((m) => m.LandingModule),
      }, 
      {
        path: 'productos',
        loadChildren: () => import('./modules/productos/productos.module').then((m) => m.ProductosModule),
      }, 
    ],
  }, 
  // { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
