import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Routes } from '@angular/router';
import { LazyLoadedChildRouteService } from 'src/app/core/services/lazyroute.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent {
  public childRoutes: Routes;
  @ViewChild('sideNav') sideNav: ElementRef;

  constructor(private lazyRoutes: LazyLoadedChildRouteService) {
    this.childRoutes = this.lazyRoutes.getChildRoutes(DesignComponent);
  }

  toggleSideNav(event: MouseEvent) {
    let element = this.sideNav.nativeElement as HTMLElement;
    element.classList.toggle('side-nav--open');
  }
}
