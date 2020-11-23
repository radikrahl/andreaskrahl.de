import { style, animate, keyframes } from '@angular/animations';

export const slideLeftOut = animate(
  '0.2s',
  keyframes([
    style({ transform: 'translateX(0)', opacity: 1 }),
    style({ transform: 'translateX(-100%)', opacity: 0 }),
  ])
);

export const slideLeftIn = animate(
  '0.2s',
  keyframes([
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    style({ transform: 'translateX(0)', opacity: 1 }),
  ])
);

export const slideRightOut = animate(
  '0.2s',
  keyframes([
    style({ transform: 'translateX(0)', opacity: 1 }),
    style({ transform: 'translateX(100%)', opacity: 0 }),
  ])
);

export const slideRightIn = animate(
  '0.2s',
  keyframes([
    style({ transform: 'translateX(100%)', opacity: 0 }),
    style({ transform: 'translateX(0)', opacity: 1 }),
  ])
);
