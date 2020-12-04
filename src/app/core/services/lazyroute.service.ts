import { Location } from '@angular/common';
import { Inject, Injectable, Type } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';

@Injectable()
export class LazyLoadedChildRouteService {
  private childRoutes: Routes;

  constructor(
    @Inject('componentType') private componentType: Type<any>,
    private loc: Location
  ) {}

  public updateLazyLoadedRoutes(childRoutes: Routes): void {
    this.childRoutes = childRoutes;
  }

  public getChildRoutes(): Routes {
    return this.childRoutes
      .filter((x) => x.component === this.componentType)[0].children;
  }

  public getCurrentRouteIndex(): number {
    const routes = this.getChildRoutes();
    for (let index = 0; index < routes.length; index++) {
      const element = routes[index];

      if ('/' + element.path === this.loc.path()) {
        return index;
      }
    }

    // return default
    return 0;
  }
}
