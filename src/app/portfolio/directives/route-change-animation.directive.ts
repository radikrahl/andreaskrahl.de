import { AnimationPlayer } from '@angular/animations';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { RouteChangeAnimationService } from '../services/route-change-animation.service';

@Directive({
  selector: '[appRouteChangeAnimation]',
})
export class RouteChangeAnimationDirective {
  player: AnimationPlayer | undefined;

  @HostListener('swipe', ['$event'])
  onHorizontal(event: HammerInput): void {
    // swipe left
    if (event.deltaX < 0) {
      this.animation.animate2(this.element, 'left');
      // swipe right
    } else if (event.deltaX > 0) {
      this.animation.animate2(this.element, 'right');
    }
  }

  constructor(
    private element: ElementRef,
    private animation: RouteChangeAnimationService
  ) {}
}
