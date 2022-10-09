export const isMobileWeb = () => {
    return window.innerWidth < 768;
  };
export class GlideConfig {
  autoplay: number;
  peek: GlidePeek;
  gap: number;
  animationDuration: number;
  startAt: number;
  type: 'slider' | 'carousel';
  perView: number;
  breakpoints: any;
  hoverpause: boolean;
  constructor() {
    this.autoplay = 2000;
    this.peek = {
      before: 1,
      after: 0,
    };
    this.gap = isMobileWeb() ? 10 : 10;
    this.animationDuration = 500;
    this.startAt = 0;
    this.type = 'slider';
    this.perView = 4;
    this.breakpoints = { '320': { perView: 2.25 }, '568': { perView: 2.25 } }; 
    this.hoverpause= true;
  }
}
export class GlidePeek {
  before: number;
  after: number;
  constructor() {
    this.before = 0;
    this.after = 0;
  }
}

export class GlideBreakPoints {}
