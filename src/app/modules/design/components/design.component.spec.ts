import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadedChildRouteService } from 'src/app/core/services/lazyroute.service';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../design-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesignComponent } from './design.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ColorsComponent } from './colors/colors.component';
import { FormsComponent } from './forms/forms.component';
import { ListsComponent } from './lists/lists.component';
import { TypographyComponent } from './typography/typography.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('DesignComponent', () => {
  let component: DesignComponent;
  let fixture: ComponentFixture<DesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DesignComponent,
        ColorsComponent,
        TypographyComponent,
        ListsComponent,
        ButtonsComponent,
        FormsComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        BrowserAnimationsModule,
        SharedModule
      ],
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
