import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements OnInit {
  constructor(private router: Router) {}

  onScroll(event: WheelEvent): void {
  }

  next(): void {
    this.router.navigate(['overview']);
  }

  previous(): void {
    this.router.navigate(['intro']);
  }

  ngOnInit(): void {}
}
