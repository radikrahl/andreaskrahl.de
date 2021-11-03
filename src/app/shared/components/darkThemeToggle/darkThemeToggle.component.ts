import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dark-theme-toggle',
  templateUrl: './darkThemeToggle.component.html',
  styleUrls: ['./darkThemeToggle.component.scss'],
})
export class DarkThemeToggleComponent implements AfterViewInit {
  @ViewChild('darkModeToggle', { static: false })
    darkModeToggle: ElementRef<HTMLInputElement>;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (window.localStorage.getItem('theme')) {
      this.document.documentElement.dataset.theme =
        window.localStorage.getItem('theme');
    } else {
      this.document.documentElement.dataset.theme = prefersDarkScheme.matches
        ? 'dark'
        : 'light';
      window.localStorage.setItem(
        'theme',
        this.document.documentElement.dataset.theme
      );
    }

    this.darkModeToggle.nativeElement.checked =
      window.localStorage.getItem('theme') === 'dark';
  }

  change(e) {
    var element = document.documentElement;
    element.dataset.theme = e.target.checked ? 'dark' : 'light';

    window.localStorage.setItem('theme', element.dataset.theme);
  }
}
