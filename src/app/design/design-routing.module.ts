import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadedChildRouteService } from '../core/services/lazyroute.service';
import { DesignComponent } from './components/design.component';

export const routes: Routes = [
  {
    path: '',
    component: DesignComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignRoutingModule {
  constructor(public childRouteService: LazyLoadedChildRouteService) {
    childRouteService.updateLazyLoadedRoutes(routes);
  }
}
