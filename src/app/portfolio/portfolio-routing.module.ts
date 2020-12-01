import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadedChildRouteService } from '../core/services/lazyroute.service';
import { AboutComponent } from './components/about/about.component';
import { IntroComponent } from './components/intro/intro.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PortfolioComponent } from './portfolio.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PortfolioComponent,
    children: [
      {
        path: 'intro',
        component: IntroComponent,
        data: {
          headline: 'Hi and welcome, I am Andreas Krahl',
        },
      },
      {
        path: 'overview',
        component: OverviewComponent,
        data: {
          headline: 'you can visit the following places on this server.',
        },
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          headline: 'Little bit about me.',
        },
      },
      // first need projects to showcase ._.
      // {
      //   path: 'projects',
      //   component: CurrentProjectsComponent,
      //   data: {
      //     headline: 'current projects and social links',
      //   },
      // },
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
