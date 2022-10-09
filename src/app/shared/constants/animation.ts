import {
  animate,
  animation,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

export const toggleBox = trigger('toggleBox', [
  state(
    'open',
    style({
      height: 'auto',
      minHeight: '90px',
      // backgroundColor: '#061ff0'
      zIndex: '10',
    })
  ),
  state(
    'closed',
    style({
      height: '0px',
      // backgroundColor: '#E91E63',
      borderBottom: 'none',
    })
  ),
  transition('open => closed', [animate('.3s')]),
  transition('closed => open', [animate('0.3s')]),
]);

export const transitionAnimation = animation([
    style({
      height: '{{ height }}',
      opacity: '{{ opacity }}',
      backgroundColor: '{{ backgroundColor }}'
    }),
    animate('{{ time }}')
  ]);

export const triggerAnimation = trigger('openClose', [
  transition('open => closed', [
    useAnimation(transitionAnimation, {
      params: {
        height: 0,
        opacity: 1,
        backgroundColor: 'red',
        time: '1s'
      }
    })
  ])
]);
 

export const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '2s ease-in',
    style({
      opacity: 1,
    })
  ),
]);

export const enterTransitionMin = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '1s ease-in',
    style({
      opacity: 1,
    })
  ),
]);
export const enterMinTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '1500ms ease-in',
    style({
      opacity: 1,
    })
  ),
]);
export const leaveTrans = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate(
    '2s ease-out',
    style({
      opacity: 0,
    })
  ),
]);

export const listAnimationProduct = trigger('listAnimationProduct', [
  transition('* <=> *', [
    query(':enter', [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))], {
      optional: true,
    }),
    query(':leave', animate('10ms', style({ opacity: 0 })), { optional: true }),
  ]),
]);
export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter', [style({ opacity: 0 }), stagger('120ms', animate('1200ms ease-out', style({ opacity: 1 })))], {
      optional: true,
    }),
  ]),
]);
export const listAnimationIn = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter', [style({ opacity: 0 }), stagger('120ms', animate('1200ms ease-out', style({ opacity: 1 })))], {
      optional: true,
    }),
  ]),
]);
export const fadeIn = trigger('fadeIn', [enterTransition]);
export const fadeMinIn = trigger('fadeMinIn', [enterTransitionMin]);
export const minfadeIn = trigger('minfadeIn', [enterMinTransition]);

export const fadeOut = trigger('fadeOut', [leaveTrans]);

 