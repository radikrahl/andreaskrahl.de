import { NgModule } from '@angular/core';
import { LazyLoadedChildRouteService } from '../core/services/lazyroute.service';
import { SharedModule } from '../shared/shared.module';
import { DesignComponent } from './components/design.component';
import { DesignRoutingModule } from './design-routing.module';

@NgModule({
  imports: [DesignRoutingModule, SharedModule],
  declarations: [DesignComponent],
  providers: [LazyLoadedChildRouteService],
})
export class DesignModule {}
