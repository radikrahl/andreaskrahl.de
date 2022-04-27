import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'default';

  constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    let theme = this.documentRef.documentElement.dataset.theme;
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    } else {
      theme = prefersDarkScheme.matches ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    }
  }
}
