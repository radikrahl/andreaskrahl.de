import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContentLayoutComponent } from './content-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ContentLayoutComponent, HeaderComponent, FooterComponent],
  imports: [SharedModule],
  providers: [],
  // todo: export needed for ContentLayoutComponent
  exports: [],
})
export class ContentLayoutModule {}
