import { NgModule } from '@angular/core';
import { LazyLoadedChildRouteService } from '../core/services/lazyroute.service';
import { SharedModule } from '../shared/shared.module';
import { IntroComponent } from './components/intro/intro.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AboutComponent } from './components/about/about.component';
import { CurrentProjectsComponent } from './components/current-projects/current-projects.component';
import { RouteChangeAnimationDirective } from './directives/route-change-animation.directive';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { RouteChangeAnimationService } from './services/route-change-animation.service';

@NgModule({
  imports: [PortfolioRoutingModule, SharedModule],
  declarations: [
    PortfolioComponent,
    IntroComponent,
    OverviewComponent,
    AboutComponent,
    CurrentProjectsComponent,
    RouteChangeAnimationDirective,
  ],
  providers: [
    RouteChangeAnimationService,
    LazyLoadedChildRouteService,
    { provide: 'componentType', useValue: PortfolioComponent },
  ],
})
export class PortfolioModule {}
