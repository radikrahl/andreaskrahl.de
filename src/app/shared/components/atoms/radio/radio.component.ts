import { Component } from '@angular/core';
import { BaseInputComponent } from '../input-base';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio.component.html',
})
export class RadioButtonComponent extends BaseInputComponent {
  constructor() {
    super();
  }
}
