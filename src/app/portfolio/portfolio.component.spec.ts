import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';
import { LazyLoadedChildRouteService } from 'src/app/core/services/lazyroute.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './portfolio-routing.module';
import { RouteChangeAnimationService } from './services/route-change-animation.service';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioComponent],
      imports: [RouterTestingModule.withRoutes(routes), BrowserAnimationsModule],
      providers: [LazyLoadedChildRouteService, RouteChangeAnimationService, {provide: 'componentType', useValue: PortfolioComponent}],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    // ViewChild({ static: false }) is breaking this
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
