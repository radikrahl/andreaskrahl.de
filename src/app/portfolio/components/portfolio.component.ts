import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { LazyLoadedChildRouteService } from 'src/app/core/services/lazyroute.service';
import { slideInAnimation } from '../classes/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [slideInAnimation],
})
export class PortfolioComponent implements OnInit, OnDestroy {
  public headline: string;
  private subs: Array<Subscription> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

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
