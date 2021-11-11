import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { LazyLoadedChildRouteService } from 'src/app/core/services/lazyroute.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styles: ['.router-link-active{ color: var(--color-links-hover)}'],
})
export class DesignComponent {
  public childRoutes: Routes;
  constructor(
    private lazyRoutes: LazyLoadedChildRouteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.childRoutes = this.lazyRoutes.getChildRoutes(DesignComponent);
  }
}
