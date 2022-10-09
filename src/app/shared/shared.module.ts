import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LottieCacheModule, LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { HttpClientModule } from '@angular/common/http';
import { Seccion1Component } from './components/seccion1/seccion1.component';
import { Seccion2Component } from './components/seccion2/seccion2.component';
import { Seccion3Component } from './components/seccion3/seccion3.component';
import { Seccion4Component } from './components/seccion4/seccion4.component';
import { TestimonioComponent } from './components/testimonio/testimonio.component';
import { GlideComponent } from './components/glide/glide.component';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
    Seccion4Component,
    TestimonioComponent,
    GlideComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    LottieCacheModule,
  ],
  exports: [
    LottieModule,
    LottieCacheModule,
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
    Seccion4Component,
    TestimonioComponent,
    CommonModule, 
    GlideComponent
  ],
  entryComponents: [],
  providers: [],
})
export class SharedModule {}
