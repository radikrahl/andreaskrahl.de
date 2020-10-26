import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { IntroComponent } from './components/intro/intro.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PortfolioComponent } from './components/portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  imports: [PortfolioRoutingModule, SharedModule],
  declarations: [PortfolioComponent, IntroComponent, OverviewComponent],
  providers: [],
})
export class PortfolioModule {}
