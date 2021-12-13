import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio.component.html',
  // styleUrls: ['./darkThemeToggle.component.scss'],
})
export class RadioButtonComponent {
  @Input() inputId: any;
  @Input() labelText: string;
  @Input() isDisabled: boolean = false;
  @Input() isChecked: boolean = false;
  @Input() name: string;
  @Input() styles: string;
  @Input() value: any;

  constructor() {
    if (!this.inputId) {
      this.inputId = this.createUUID();
    }
    if (!this.name) {
      this.name = this.inputId;
    }
  }

  private createUUID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
