import { NgModule } from '@angular/core';
import { LazyLoadedChildRouteService } from '../core/services/lazyroute.service';
import { SharedModule } from '../shared/shared.module';
import { IntroComponent } from './components/intro/intro.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PortfolioComponent } from './components/portfolio.component';
import { RouteChangeAnimationDirective } from './directives/route-change-animation.directive';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  imports: [PortfolioRoutingModule, SharedModule],
  declarations: [
    PortfolioComponent,
    IntroComponent,
    OverviewComponent,
    RouteChangeAnimationDirective,
  ],
  providers: [LazyLoadedChildRouteService],
})
export class PortfolioModule {}
