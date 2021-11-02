import { ComponentFixture, TestBed } from '@angular/core/testing';


import { LazyLoadedChildRouteService } from 'src/app/core/services/lazyroute.service';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../design-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesignComponent } from './design.component';

describe('DesignComponent', () => {
  let component: DesignComponent;
  let fixture: ComponentFixture<DesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignComponent],
      imports: [RouterTestingModule.withRoutes(routes), BrowserAnimationsModule],
      providers: [LazyLoadedChildRouteService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
