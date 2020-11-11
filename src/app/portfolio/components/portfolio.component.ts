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
import {
  swipeLeftInstruction,
  swipeRightInstruction,
} from '../classes/animations';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, OnDestroy, AfterViewInit {
  public headline: string;
  private subs: Array<Subscription> = [];
  @ViewChild('swipeHint', { static: false }) swipeHint: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private animation: AnimationService
  ) {}

  ngAfterViewInit(): void {
    this.animation.animate(this.swipeHint, swipeRightInstruction, () => {
      this.animation.animate(this.swipeHint, swipeLeftInstruction);
    });
  }

  ngOnInit(): void {
    if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.data) {
      this.headline = this.route.snapshot.firstChild.data.headline;
    }

    this.subs.push(
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => this.route.snapshot.firstChild ?? this.route.snapshot)
        )
        .subscribe((x) => (this.headline = x.data.headline))
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
