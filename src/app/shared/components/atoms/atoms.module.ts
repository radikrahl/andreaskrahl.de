import { NgModule } from '@angular/core';
import { CheckboxComponent } from './forms/checkbox/checkbox.component';
import { RadioButtonComponent } from './forms/radio/radio.component';
import { SwitchComponent } from './forms/switch/switch.component';

@NgModule({
  imports: [],
  declarations: [CheckboxComponent, SwitchComponent, RadioButtonComponent],
  exports: [CheckboxComponent, SwitchComponent, RadioButtonComponent],
})
export class AtomsModule {}
