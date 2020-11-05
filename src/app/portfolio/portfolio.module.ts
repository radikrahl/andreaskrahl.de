import { NgModule } from '@angular/core';
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { LazyLoadedChildRouteService } from '../core/services/lazyroute.service';
import { SharedModule } from '../shared/shared.module';
import { IntroComponent } from './components/intro/intro.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PortfolioComponent } from './components/portfolio.component';
import { RouteChangeAnimationDirective } from './directives/route-change-animation.directive';
import { PortfolioRoutingModule } from './portfolio-routing.module';

import * as Hammer from 'hammerjs';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: { direction: Hammer.DIRECTION_HORIZONTAL },
  };
}

@NgModule({
  imports: [PortfolioRoutingModule, SharedModule],
  declarations: [
    PortfolioComponent,
    IntroComponent,
    OverviewComponent,
    RouteChangeAnimationDirective,
  ],
  providers: [
    LazyLoadedChildRouteService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
})
export class PortfolioModule {}
