import { AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
} from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { LazyLoadedChildRouteService } from 'src/app/core/services/lazyroute.service';
import { slideLeft, slideRight } from '../classes/animations';
import { PortfolioComponent } from '../components/portfolio.component';

@Directive({
  selector: '[appRouteChangeAnimation]',
})
export class RouteChangeAnimationDirective implements OnInit {
  player: AnimationPlayer | undefined;

  @HostListener('window:scroll', ['$event'])
  @HostListener('wheel', ['$event'])
  @HostListener('touch', ['$event'])
  onEvent(event): void {
    const childRoutes = this.lazyRoutes.getChildRoutes(PortfolioComponent);
    let currentIndex: number;

    for (let index = 0; index < childRoutes.length; index++) {
      const element = childRoutes[index];
      if (element.path === this.route.snapshot.firstChild.routeConfig.path) {
        currentIndex = index;
      }
    }

    if (event.deltaY > 0) {
      this.router.navigate([childRoutes[currentIndex + 1].path]);
      this.animate('down');
    } else if (event.deltaY < 0) {
      this.router.navigate([childRoutes[currentIndex - 1].path]);
      this.animate('up');
    }
  }

  constructor(
    private element: ElementRef,
    private builder: AnimationBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private lazyRoutes: LazyLoadedChildRouteService
  ) {}

  animate(direction: string): void {
    const metadata = direction === 'up' ? slideLeft : slideRight;
    const factory = this.builder.build(metadata);
    const player = factory.create(this.element.nativeElement);
    player.play();
  }

  // async stuff
  // async animate(direction: string): Promise<any> {
  //   const metadata = direction === 'up' ? slideLeft : slideRight;
  //   const factory = this.builder.build(metadata);
  //   const player = factory.create(this.element.nativeElement);
  //   return new Promise((resolve) => {
  //     return setTimeout(() => {
  //       console.log('play');
  //       player.play();
  //       resolve();
  //     }, 800);
  //   });
  // }

  ngOnInit(): void {
    // this.router.events
    //   .pipe(
    //     filter((event) => event instanceof NavigationStart),
    //     map((event) => {
    //       // setTimeout(() => {
    //       //   this.animate('down');
    //       //   console.log(event);
    //       // }, 5000);
    //       // await this.animate('down');
    //     })
    //   )
    //   .subscribe(async (x) => await this.animate('down'));
  }
}
