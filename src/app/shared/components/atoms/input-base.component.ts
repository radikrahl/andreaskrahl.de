import { Directive, Input, OnInit } from '@angular/core';
import { GuidGenerator } from 'src/app/core/helper/GuidGenerator';

@Directive()
export abstract class BaseInputComponent implements OnInit {
  @Input() inputId: any;
  @Input() disabled: boolean;
  @Input() checked: boolean;
  @Input() name: string;
  @Input() styles: string;
  @Input() value: any;

  constructor() {
    if (!this.inputId) {
      this.inputId = GuidGenerator.createUUID();
    }
    if (!this.name) {
      this.name = this.inputId;
    }
  }
  ngOnInit(): void {
    this.disabled = this.disabled !== undefined;
    this.checked = this.checked !== undefined;
  }
}
