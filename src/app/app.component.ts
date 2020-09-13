import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'default';

  public get links(): Array<{ url: string, image: string }> {
    let data = [
      {
        url: 'https://blog.andreaskrahl.de',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ghost-Logo.svg/2000px-Ghost-Logo.svg.png'
      },
      {
        url: 'https://dashboard.andreaskrahl.de',
        image: 'https://docs.traefik.io/assets/img/traefik.logo.png'
      },
      {
        url: 'http://test.andreaskrahl.de',
        image: 'https://ih1.redbubble.net/image.121551245.2521/st,small,507x507-pad,600x600,f8f8f8.u1.jpg'
      },
    ];

    return data;
  }
}
