import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  animate,
  group,
  keyframes,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* => up', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('* => down', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '-100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);


export const scaleInTop = animate('0.5s 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940)', keyframes([
  style({ visibility: 'visible', opacity: 0, }),
  style({ transform: 'scale(0)', transformOrigin: '50% 0%', }),
  style({ transform: 'scale(1)', transformOrigin: '50% 0%', opacity: 1, }),
]));

export const rotate = animate('0.6s', keyframes([
  style({ visibility: 'visible', opacity: 0, }),
  style({ transform: 'rotate(-90deg)', }),
  style({ transform: 'rotate(0)', opacity: 1, }),
]));

export const rotateReverse = animate('0.6s', keyframes([
  style({ visibility: 'visible', opacity: 0, }),
  style({ transform: 'rotate(90deg)', }),
  style({ transform: 'rotate(0)', opacity: 1, }),
]));

export const slideLeft = animate('0.4s', keyframes([
  style({position: 'absolute', top: 0, left: '-100%', width: '100%'}),
  style({ left: '-100%' }),
  style({ left: '0', position: 'relative' }),
]));

export const slideRight = animate('0.4s', keyframes([
  style({position: 'absolute', top: 0, left: '100%', width: '100%'}),
  style({ left: '100%' }),
  style({ left: '0', position: 'relative' }),
]));
