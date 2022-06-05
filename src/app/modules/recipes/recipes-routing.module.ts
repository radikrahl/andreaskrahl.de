import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './components/recipes.component';
export const routes: Routes = [
  {
    path: '',
    // redirectTo: 'intro',
    pathMatch: 'full',
    component: RecipesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {
  // constructor(public childRouteService: LazyLoadedChildRouteService) {
  //   childRouteService.updateLazyLoadedRoutes(routes);
  // }
}
