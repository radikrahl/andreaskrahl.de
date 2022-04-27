import { Component, ElementRef, Input } from '@angular/core';
import { BaseInputComponent } from '../../base/inputBase';

const INVALID_INPUT_TYPES = [
  'button',
  'checkbox',
  'color',
  'image',
  'hidden',
  'radio',
  'range',
  'submit',
];

@Component({
  selector: 'app-text-input',
  templateUrl: './textInput.component.html',
})
export class TextInputComponent extends BaseInputComponent {
  @Input()
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value || 'text';
    this._validateType();
  }
  protected _type = 'text';

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
  }
  protected _placeholder: string = '';

  @Input()
  get labelText(): string {
    return this._labelText;
  }
  set labelText(value:string) {
    this._labelText = value;
  }
  protected _labelText: string;

  constructor(private elementRef: ElementRef) {
    super();
  }

  /** Make sure the input is a supported type. */
  protected _validateType() {
    if (INVALID_INPUT_TYPES.indexOf(this._type) > -1) {
      throw this.getInputUnsupportedTypeError(this._type);
    }
  }

  getInputUnsupportedTypeError(type: string): Error {
    return Error(
      `Input type "${type}" isn't supported by text input component`
    );
  }
}
