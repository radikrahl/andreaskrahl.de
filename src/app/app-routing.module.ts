import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    loadChildren: () =>
      import('./modules/portfolio/portfolio.module').then((m) => m.PortfolioModule),
  },
  {
    path: 'design',
    component: ContentLayoutComponent,
    loadChildren: () =>
      import('./modules/design/design.module').then((m) => m.DesignModule),
  },
  {
    path: 'recipes',
    component: ContentLayoutComponent,
    loadChildren: () =>
      import('./modules/recipes/recipes.module').then((m) => m.RecipesRoutesModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
