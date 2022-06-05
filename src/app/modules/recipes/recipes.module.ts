import { NgModule } from '@angular/core';
import { LazyLoadedChildRouteService } from '../../core/services/lazyroute.service';
import { SharedModule } from '../../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';


@NgModule({
  imports: [RecipesRoutingModule, SharedModule],
  declarations: [
  ],
  providers: [],
})
export class RecipesRoutesModule {}
