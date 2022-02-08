import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-bubble',
  templateUrl: './color-bubble.component.html',
})
export class ColorBubbleComponent {
  @Input() modifier: ColorModifier = ColorModifier.None;
  @Input('class') customCssClass: string;

  public get color() {
    switch (this.modifier) {
      case ColorModifier.None:
        return '';
      case ColorModifier.Light:
        return '-light';
      case ColorModifier.Emphasis:
        return '-emphasis';
      default:
        return '';
    }
  }

  constructor() {
  }
}

export enum ColorModifier {
  None,
  Light,
  Emphasis
}
