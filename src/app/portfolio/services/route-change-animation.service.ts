import {
  AnimationAnimateMetadata,
  AnimationBuilder,
} from '@angular/animations';
import { ElementRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadedChildRouteService } from 'src/app/core/services/lazyroute.service';
import {
  slideLeftIn,
  slideLeftOut,
  slideRightIn,
  slideRightOut,
} from '../classes/slide-animations';

@Injectable()
export class RouteChangeAnimationService {
  constructor(
    private builder: AnimationBuilder,
    private lazyRoutes: LazyLoadedChildRouteService,
    private router: Router
  ) {}

  animate(
    element: ElementRef,
    metadata: AnimationAnimateMetadata,
    fn: () => void = null
  ): void {
    const factory = this.builder.build(metadata);
    const player = factory.create(element.nativeElement);

    if (fn != null) {
      player.onDone(fn);
    }

    player.play();
  }

  animate2(element: ElementRef, direction: string): void {
    const childRoutes = this.lazyRoutes.getChildRoutes();
    const currentIndex = this.lazyRoutes.getCurrentRouteIndex();
    if (direction === 'left' && !(currentIndex + 1 > childRoutes.length - 1)) {
      this.animate(element, slideLeftOut, () => {
        this.router.navigate([childRoutes[currentIndex + 1].path]);
        this.animate(element, slideRightIn);
      });
    } else if (direction === 'right' && !(currentIndex - 1 < 0)) {
      this.animate(element, slideRightOut, () => {
        this.router.navigate([childRoutes[currentIndex - 1].path]);
        this.animate(element, slideLeftIn);
      });
    }
  }
}
