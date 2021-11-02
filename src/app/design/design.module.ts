import { NgModule } from '@angular/core';
import { LazyLoadedChildRouteService } from '../core/services/lazyroute.service';
import { SharedModule } from '../shared/shared.module';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ColorsComponent } from './components/colors/colors.component';
import { DesignComponent } from './components/design.component';
import { FormsComponent } from './components/forms/forms.component';
import { ListsComponent } from './components/lists/lists.component';
import { TypographyComponent } from './components/typography/typography.component';
import { DesignRoutingModule } from './design-routing.module';

@NgModule({
  imports: [DesignRoutingModule, SharedModule],
  declarations: [
    DesignComponent,
    ColorsComponent,
    TypographyComponent,
    ListsComponent,
    ButtonsComponent,
    FormsComponent
  ],
  providers: [LazyLoadedChildRouteService],
})
export class DesignModule {}
