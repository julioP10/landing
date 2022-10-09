import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GlideConfig } from 'src/app/shared/components/glide/glide.config';
import { TestimonioConfig } from './testimonio.config';

@Component({
  selector: 'app-testimonio',
  templateUrl: './testimonio.component.html',
  styleUrls: ['./testimonio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonioComponent implements OnInit {
  @Input() type:'GRANDE'| 'PEQUEÑO' = 'GRANDE'
  settings = new GlideConfig();
  settingsPequeno = new GlideConfig();
  @Input() config = new TestimonioConfig();
  constructor() { 
   }

  ngOnInit(): void {
    this.settings.perView = 2;
    this.settings.animationDuration = 1500;
    this.settings.autoplay = 0;
    this.settings.type = 'carousel'; 
    this.settings.hoverpause= true;
    // this.settings.breakpoints = { '320': { perView: 2.25 }, '568': { perView: 3.25 } };
    this.settings.breakpoints = { '320': { perView: 1 }, '568': { perView: 1 } }; 

    this.settingsPequeno.perView = 1;
    this.settingsPequeno.animationDuration = 1500;
    this.settingsPequeno.autoplay = 0;
    this.settingsPequeno.type = 'carousel'; 
    this.settingsPequeno.hoverpause= true;
    // this.settings.breakpoints = { '320': { perView: 2.25 }, '568': { perView: 3.25 } };
    this.settingsPequeno.breakpoints = { '320': { perView: 2.25 }, '568': { perView: 2.25 } }; 
  }

}
