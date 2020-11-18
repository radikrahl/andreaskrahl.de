import { style, animate, keyframes } from '@angular/animations';

export const swipeRightInstruction = animate(
  '0.9s',
  keyframes([
    style({
      position: 'absolute',
      transform: 'rotate(60deg)',
      left: 0,
      opacity: 0,
      bottom: 0,
    }),
    style({ transform: 'rotate(70deg)', opacity: 1 }),
    style({ transform: 'rotate(80deg)', opacity: 0.6666 }),
    style({ transform: 'rotate(90deg)', opacity: 0.3333 }),
    style({ transform: 'rotate(100deg)', opacity: 0 }),
  ])
);

export const swipeLeftInstruction = animate(
  '0.9s',
  keyframes([
    style({
      position: 'absolute',
      transform: 'rotate(120deg)',
      left: 0,
      opacity: 0,
      bottom: 0,
    }),
    style({ transform: 'rotate(110deg)', opacity: 1 }),
    style({ transform: 'rotate(100deg)', opacity: 0.6666 }),
    style({ transform: 'rotate(90deg)', opacity: 0.3333}),
    style({ transform: 'rotate(80deg)', opacity: 0 }),
  ])
);
