import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DarkThemeToggleComponent } from './components/darkThemeToggle/darkThemeToggle.component';
import { AtomsModule } from './components/atoms/atoms.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AtomsModule,
  ],
  declarations: [DarkThemeToggleComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    DarkThemeToggleComponent,
    AtomsModule,
  ],
})
export class SharedModule {}
