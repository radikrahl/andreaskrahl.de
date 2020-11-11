import { style, animate, keyframes } from '@angular/animations';

export const swipeLeftInstruction = animate(
  '1.2s',
  keyframes([
    style({
      position: 'absolute',
      transform: 'rotate(-60deg)',
      left: 0,
      opacity: 0,
      bottom: 0,
    }),
    style({ transform: 'rotate(-30deg)', opacity: 1 }),
    style({ transform: 'rotate(0deg)' }),
    style({ transform: 'rotate(30deg)' }),
    style({ transform: 'rotate(60deg)', opacity: 0 }),
  ])
);

export const swipeRightInstruction = animate(
  '1.2s',
  keyframes([
    style({
      position: 'absolute',
      transform: 'rotate(60deg)',
      left: 0,
      opacity: 0,
      bottom: 0,
    }),
    style({ transform: 'rotate(30deg)', opacity: 1 }),
    style({ transform: 'rotate(0deg)' }),
    style({ transform: 'rotate(-30deg)' }),
    style({ transform: 'rotate(-60deg)', opacity: 0 }),
  ])
);
