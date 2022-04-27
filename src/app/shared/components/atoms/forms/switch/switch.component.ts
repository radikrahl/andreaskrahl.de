import { Component } from '@angular/core';
import { BaseInputComponent } from '../../base/inputBase';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
})
export class SwitchComponent extends BaseInputComponent {
  constructor() {
    super();
  }
}
