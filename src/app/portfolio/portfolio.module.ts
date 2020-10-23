import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PortfolioComponent } from './components/portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
    imports: [
        SharedModule,
        PortfolioRoutingModule
    ],
    declarations: [PortfolioComponent],
    providers: []
})
export class PortfolioModule {}
