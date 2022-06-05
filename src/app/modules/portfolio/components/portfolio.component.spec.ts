import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';
import { LazyLoadedChildRouteService } from 'src/app/core/services/lazyroute.service';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../portfolio-routing.module';
import { AnimationService } from '../../../shared/services/animation.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioComponent],
      imports: [RouterTestingModule.withRoutes(routes), BrowserAnimationsModule, SharedModule],
      providers: [LazyLoadedChildRouteService, AnimationService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
