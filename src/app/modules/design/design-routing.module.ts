import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadedChildRouteService } from '../../core/services/lazyroute.service';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ColorsComponent } from './components/colors/colors.component';
import { DesignComponent } from './components/design.component';
import { FormsComponent } from './components/forms/forms.component';
import { ListsComponent } from './components/lists/lists.component';
import { TypographyComponent } from './components/typography/typography.component';

export const routes: Routes = [
  {
    path: '',
    component: DesignComponent,
    children: [
      {
        path: 'forms',
        component: FormsComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'colors',
        component: ColorsComponent,
      },
      {
        path: 'typo',
        component: TypographyComponent,
      },
      {
        path: 'lists',
        component: ListsComponent,
      },
      // {
      //   path: 'checkboxes',
      //   component: CheckboxesComponent,
      // },
      // {
      //   path: 'radios',
      //   component: RadiosComponent,
      // },
      // {
      //   path: 'ranges',
      //   component: RangesComponent,
      // },
    ],
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
