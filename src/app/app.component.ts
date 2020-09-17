import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'default';

  public get links(): Array<{ name: string; url: string; image: string }> {
    const data = [
      {
        name: 'blog',
        url: 'https://blog.andreaskrahl.de',
        image: 'assets/2000px-Ghost-Logo.svg.png',
      },
      {
        name: 'dashboard',
        url: 'https://dashboard.andreaskrahl.de',
        image: 'assets/traefik.logo.png',
      },
      {
        name: 'test',
        url: 'http://test.andreaskrahl.de',
        image: 'assets/it_works.png',
      },
    ];

    return data;
  }
}
