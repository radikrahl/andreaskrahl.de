import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SwitchComponent } from './switch/checkbox/switch.component';
import { RadioButtonComponent } from './radio/radio.component';

@NgModule({
  imports: [],
  declarations: [CheckboxComponent, SwitchComponent, RadioButtonComponent],
  exports: [CheckboxComponent, SwitchComponent, RadioButtonComponent],
})
export class AtomsModule {}
