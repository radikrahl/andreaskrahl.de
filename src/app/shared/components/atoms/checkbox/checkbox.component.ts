import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  @Input() inputId: any;
  @Input() isDisabled: boolean = false;
  @Input() isChecked: boolean = false;
  @Input() name: string;

  constructor() {
    if (!this.inputId) {
      this.inputId = this.createUUID();
    }
    if (!this.name) {
      this.name = this.inputId;
    }
  }

  private createUUID() {
    return '_' + Math.random().toString(36).substring(2, 9);
  }
}
