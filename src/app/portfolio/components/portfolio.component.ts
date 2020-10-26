import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IDataLink } from 'src/app/core/models/link.class';
import { DataService } from 'src/app/core/services/data.service';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, OnDestroy {
  public links: Array<IDataLink>;
  public headline: string;
  private subs: Array<Subscription> = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.headline = this.route.snapshot.firstChild.data.headline;
    this.subs.push(
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => this.route.snapshot),
          map((route) => {
            if (route.firstChild) {
              route = route.firstChild;
            }
            return route;
          })
        )
        .subscribe((x) => (this.headline = x.data.headline))
    );

    this.subs.push(
      this.dataService
        .getJSON('./assets/data/links.json')
        .subscribe((x) => (this.links = x))
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
