import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { LazyLoadedChildRouteService } from 'src/app/core/services/lazyroute.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements OnInit {
  public childRoutes: Routes;
  public isAll: boolean;
  @ViewChild('sideNav') sideNav: ElementRef;

  constructor(private router: Router, private lazyRoutes: LazyLoadedChildRouteService) {
    this.childRoutes = this.lazyRoutes.getChildRoutes(DesignComponent);
  }
  ngOnInit(): void {
    if (this.router.url === '/design')
      this.isAll = true;
  }

  toggleSideNav(event: MouseEvent) {
    let element = this.sideNav.nativeElement as HTMLElement;
    element.classList.toggle('side-nav--open');
  }
}
