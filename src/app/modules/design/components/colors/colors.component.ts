import { Component } from '@angular/core';
import { ColorModifier } from 'src/app/shared/components/atoms/colors/color-bubble/color-bubble.component';

@Component({
  selector: 'app-design-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent {
  public ColorModifier = ColorModifier;
}
