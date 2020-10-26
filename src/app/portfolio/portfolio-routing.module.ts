import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PortfolioComponent } from './components/portfolio.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
  },
  {
    path: '',
    component: PortfolioComponent,
    children: [
      {
        path: 'intro',
        component: IntroComponent,
        data: { headline: 'Hi and welcome, I am Andreas Krahl' },
      },
      {
        path: 'overview',
        component: OverviewComponent,
        data: {
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
export class PortfolioRoutingModule {}
