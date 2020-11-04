import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadedChildRouteService } from '../core/services/lazyroute.service';
import { IntroComponent } from './components/intro/intro.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PortfolioComponent } from './components/portfolio.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PortfolioComponent,
    children: [
      {
        path: 'intro',
        component: IntroComponent,
        data: {
          animation: 'IntroPage',
          headline: 'Hi and welcome, I am Andreas Krahl',
        },
      },
      {
        path: 'overview',
        component: OverviewComponent,
        data: {
          animation: 'OverviewPage',
          headline: 'you can visit the following places on this server.',
        },
      },
      {
        path: 'overview2',
        component: OverviewComponent,
        data: {
          animation: 'FilterPage',
          headline: 'you can visit the following places on this server.',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {
  constructor(public childRouteService: LazyLoadedChildRouteService) {
    childRouteService.updateLazyLoadedRoutes(routes);
  }
}
