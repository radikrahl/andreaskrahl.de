import {
  AfterContentChecked,
  Component,
  Inject,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SwitchComponent } from '../atoms/forms/switch/switch.component';

@Component({
  selector: 'app-dark-theme-toggle',
  templateUrl: './darkThemeToggle.component.html',
  styleUrls: ['./darkThemeToggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DarkThemeToggleComponent implements AfterContentChecked {
  @ViewChild(SwitchComponent, { static: true })
  darkModeToggle: SwitchComponent;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterContentChecked(): void {
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
    this.darkModeToggle.checked =
      window.localStorage.getItem('theme') === 'dark';
  }

  change(e: MouseEvent) {
    var element = document.documentElement;
    element.dataset.theme = (<HTMLInputElement>e.target).checked
      ? 'dark'
      : 'light';

    window.localStorage.setItem('theme', element.dataset.theme);
  }
}
