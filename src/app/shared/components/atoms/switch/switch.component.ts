import { Component } from '@angular/core';
import { BaseInputComponent } from '../input-base';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
})
export class SwitchComponent extends BaseInputComponent {
  constructor() {
    super();
  }
}
