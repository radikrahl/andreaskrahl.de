import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { GuidGenerator } from 'src/app/core/helper/guidGenerator';


@Directive()
export abstract class BaseInputComponent implements OnInit {
  @Input()
  get inputId(): string {
    return this._inputId;
  }
  set inputId(value: string) {
    this._inputId = value;
  }
  protected _inputId: string = GuidGenerator.createUUID();

  @Input() get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  protected _name: string = this.inputId;

  @Input()
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
  }
  protected _value: string = '';

  @Input() disabled: boolean;
  @Input() checked: boolean;
  @Input() styles: string;

  constructor() {
    // if (!this.inputId) this.inputId = GuidGenerator.createUUID();
    // if (!this.name) this.name = this.inputId;
  }

  ngOnInit(): void {
    this.disabled = this.disabled !== undefined;
    this.checked = this.checked !== undefined;
  }
}
