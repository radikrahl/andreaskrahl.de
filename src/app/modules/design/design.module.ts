import { NgModule } from '@angular/core';
import { LazyLoadedChildRouteService } from '../../core/services/lazyroute.service';
import { SharedModule } from '../../shared/shared.module';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ColorsComponent } from './components/colors/colors.component';
import { DesignComponent } from './components/design.component';
import { CheckboxesComponent } from './components/forms/checkboxes/checkboxes.component';
import { FormsComponent } from './components/forms/forms.component';
import { LoginFormComponent } from './components/forms/login/login.component';
import { RadiosComponent } from './components/forms/radios/radios.component';
import { RangesComponent } from './components/forms/ranges/ranges.component';
import { SwitchesComponent } from './components/forms/switches/switches.component';
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

    // Forms components
    FormsComponent,
    LoginFormComponent,
    CheckboxesComponent,
    SwitchesComponent,
    RadiosComponent,
    RangesComponent
  ],
  providers: [LazyLoadedChildRouteService],
})
export class DesignModule {}
