import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { RouteChangeAnimationService } from './services/route-change-animation.service';
import {
  swipeRightInstruction,
  swipeLeftInstruction,
} from './classes/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, OnDestroy, AfterViewInit {
  public headline: string;
  private subs: Array<Subscription> = [];
  public swipeText = 'swipe right';

  @ViewChild('swipeHint', { static: false }) swipeHint: ElementRef;
  @ViewChild('mainRef', { static: false }) mainRef: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private animation: RouteChangeAnimationService
  ) {}

  ngAfterViewInit(): void {
    this.playAnimation();
  }

  playAnimation(): void {
    this.swipeText = 'swipe right';
    this.animation.animate(this.swipeHint, swipeRightInstruction, () => {
      this.swipeText = 'swipe left';
      this.animation.animate(
        this.swipeHint,
        swipeLeftInstruction,
        () => (this.swipeText = 'hint')
      );
    });
  }

  changeRoute(direction: string): void {
    this.animation.animate2(this.mainRef, direction);
  }

  ngOnInit(): void {
    if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.data) {
      this.headline = this.route.snapshot.firstChild.data.headline;
    }

    this.subs.push(
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() =>
            this.route.snapshot.firstChild !== null
              ? this.route.snapshot.firstChild
              : this.route.snapshot
          )
        )
        .subscribe((x) => (this.headline = x.data.headline))
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
