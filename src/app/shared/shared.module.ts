import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DarkThemeToggleComponent } from './components/darkThemeToggle/darkThemeToggle.component';
import { RadioButtonComponent } from './components/atoms/radio/radio.component';
import { CheckboxComponent } from './components/atoms/checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [
    DarkThemeToggleComponent,

    // #### ATOMIC ####
    // ### ATOMS ###
    RadioButtonComponent,
    CheckboxComponent,
    // ### MOLECULES ###
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    DarkThemeToggleComponent,

    // #### ATOMIC ####
    // ### ATOMS ###
    RadioButtonComponent,
    CheckboxComponent,
    // ### MOLECULES ###
  ],
})
export class SharedModule {}
