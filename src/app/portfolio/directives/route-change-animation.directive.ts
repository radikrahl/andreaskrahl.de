import { AnimationPlayer } from '@angular/animations';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LazyLoadedChildRouteService } from 'src/app/core/services/lazyroute.service';
import {
  slideLeftIn,
  slideLeftOut,
  slideRightIn,
  slideRightOut,
} from '../classes/slide-animations';
import { PortfolioComponent } from '../portfolio.component';
import { AnimationService } from '../services/animation.service';

@Directive({
  selector: '[appRouteChangeAnimation]',
})
export class RouteChangeAnimationDirective {
  player: AnimationPlayer | undefined;

  @HostListener('swipe', ['$event'])
  onHorizontal(event: HammerInput): void {
    const childRoutes = this.lazyRoutes.getChildRoutes(PortfolioComponent);
    let currentIndex: number;

    for (let index = 0; index < childRoutes.length; index++) {
      const element = childRoutes[index];
      if (element.path === this.route.snapshot.firstChild.routeConfig.path) {
        currentIndex = index;
      }
    }

    // swipe left
    if (event.deltaX < 0 && !(currentIndex + 1 > childRoutes.length - 1)) {
      this.animation.animate(this.element, slideLeftOut, () => {
        this.router.navigate([childRoutes[currentIndex + 1].path]);
        this.animation.animate(this.element, slideRightIn);
      });
      // swipe right
    } else if (event.deltaX > 0 && !(currentIndex - 1 < 0)) {
      this.animation.animate(this.element, slideRightOut, () => {
        this.router.navigate([childRoutes[currentIndex - 1].path]);
        this.animation.animate(this.element, slideLeftIn);
      });
    }
  }

  constructor(
    private element: ElementRef,
    private animation: AnimationService,
    private router: Router,
    private route: ActivatedRoute,
    private lazyRoutes: LazyLoadedChildRouteService
  ) {}
}
