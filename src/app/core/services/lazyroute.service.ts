import { Injectable, Type } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { PortfolioComponent } from 'src/app/portfolio/components/portfolio.component';

@Injectable()
export class LazyLoadedChildRouteService {
  public childRoutes: Routes;

  // CONSTRUCTOR
  constructor() {}

  public updateLazyLoadedRoutes(childRoutes: Routes): void {
    this.childRoutes = childRoutes;
  }

  public getChildRoutes(type: Type<any>): Routes {
    return this.childRoutes.filter(x => x.component === type)[0].children;
  }
}
