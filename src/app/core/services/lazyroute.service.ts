import { Injectable, Type } from '@angular/core';
import { Routes } from '@angular/router';

@Injectable()
export class LazyLoadedChildRouteService {
  private childRoutes: Routes;

  constructor() {}

  public updateLazyLoadedRoutes(childRoutes: Routes): void {
    this.childRoutes = childRoutes;
  }

  public getChildRoutes(type: Type<any>): Routes {
    return this.childRoutes ? this.childRoutes.filter((x) => x.component === type)[0].children : {} as Routes;
  }
}
