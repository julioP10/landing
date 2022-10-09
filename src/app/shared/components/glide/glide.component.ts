import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import Glide from '@glidejs/glide'; 
import { GlideConfig } from './glide.config';
@Component({
  selector: 'app-glide',
  templateUrl: './glide.component.html',
  styleUrls: ['./glide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlideComponent
  implements AfterContentInit, AfterViewInit, OnDestroy
{
  @Input() settings = new GlideConfig();
  @Input() bullets = false;
  @Input() group = 1;
  @Input() type: 'BANNER' | '' = '';
  @Input() background = '';
  @Input() steps = false;
  @Input() enableCssSpace = true;
  @ViewChild('glideRef', { static: true }) glideRef!: ElementRef;
  @ViewChild('glideSlides', { static: true }) glideSlides!: ElementRef;
  @Output() changeSlide: EventEmitter<number> = new EventEmitter<number>();
  @Output() clickedGlide: EventEmitter<any> = new EventEmitter<any>();

  updateTimeout: any;
  glideCarousel: any;
  glideCount: any[] = [];
  direction = 'ltr';
  sidebar: any;
  currentSlide: number = 0;
  totalSlide: number = 0;
  constructor() {
    this.update();
  }

  ngAfterContentInit() {
    if (
      !this.glideSlides ||
      this.glideSlides.nativeElement.childNodes.length === 0
    )
      return;
    this.glideCount = Array(
      this.glideSlides.nativeElement.childNodes.length - 1
    )
      .fill(1)
      .map((x, i) => i);
    const total = Math.ceil(this.glideCount.length / this.group);
    this.totalSlide = total;
    this.glideCount = this.glideCount.slice(0, total);
    this.glideCarousel = new Glide(this.glideRef.nativeElement, {
      ...this.settings,
    });
    this.glideCarousel.mount();
  }

  ngAfterViewInit() {
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', false, false);
    window.dispatchEvent(event);
    if (this.glideCarousel) {
      const current = this.glideCarousel._i + 1;
      if (this.type === 'BANNER') {
        this.glideCarousel.on(['mount.after', 'run'], () => {
          this.changeSlide.emit(this.glideCarousel.index);
        });
      }
    }
  }

  update() {
    this.updateTimeout = setTimeout(() => {
      if (this.glideCarousel) this.glideCarousel.update();
    }, 500);
  }

  onBulletClick(bulletIndex: any) {
    this.glideCarousel.go('=' + bulletIndex);
  }
  get current() {
    const data = this.glideCarousel._i + 1;
    return data;
  }
  get arrowLeft() {
    return this.steps ? this.glideCarousel._i == 0 : false;
  }
  get arrowRight() {
    return this.steps ? this.glideCarousel._i == this.totalSlide - 1 : false;
  }

  ngOnDestroy() {
    clearTimeout(this.updateTimeout);
    this.updateTimeout = null;
    this.glideCarousel.destroy();
  }

  onclick(event: any) {
    if (event) {
      event.stopPropagation;
      try {
        if (
          this.glideCarousel &&
          this.glideCarousel._o &&
          this.glideCarousel._o.infinity === true &&
          this.glideCarousel._o.type === 'carousel'
        ) {
          const dataRead: Array<any> = event.path;
          let productCode = '';
          for (let index = 0; index < dataRead.length; index++) {
            const element = dataRead[index];
            if (element && element.classList) {
              if (element.tagName == 'APP-OFFER-CARD') {
                // caso ofertas doble listado-si se afecta diseño del card, afecta codigo
                productCode = element.textContent
                  .split('/')[1]
                  .replace(' ', '')
                  .substring(0, 6);
              }
              if (
                element.classList.contains(
                  this.glideCarousel._o.classes.cloneSlide
                ) === true
              ) {
                this.clickedGlide.emit({
                  index: this.glideCarousel.index,
                  productCode,
                });
                break;
              }
            }
          }
        }
      } catch (error) {
        console.log(error, 'Glide js');
      }
    }
  }
}
