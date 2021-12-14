import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent } from './radio/radio.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  imports: [],
  declarations: [CheckboxComponent, SwitchComponent, RadioButtonComponent],
  exports: [CheckboxComponent, SwitchComponent, RadioButtonComponent],
})
export class AtomsModule {}
