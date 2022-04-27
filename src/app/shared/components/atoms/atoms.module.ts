import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorBubbleComponent } from './colors/color-bubble/color-bubble.component';
import { CheckboxComponent } from './forms/checkbox/checkbox.component';
import { RadioButtonComponent } from './forms/radio/radio.component';
import { SwitchComponent } from './forms/switch/switch.component';
import { TextInputComponent } from './forms/textInput/textInput.component';

@NgModule({
  imports: [CommonModule, ],
  declarations: [
    CheckboxComponent,
    SwitchComponent,
    RadioButtonComponent,
    ColorBubbleComponent,
    TextInputComponent,
  ],
  exports: [
    CheckboxComponent,
    SwitchComponent,
    RadioButtonComponent,
    ColorBubbleComponent,
    TextInputComponent,
  ],
})
export class AtomsModule {}
