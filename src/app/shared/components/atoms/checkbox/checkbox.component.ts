import { Component } from '@angular/core';
import { BaseInputComponent } from '../input-base';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent extends BaseInputComponent {
  constructor() {
    super();
  }
}
