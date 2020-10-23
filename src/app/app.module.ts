import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentLayoutModule } from './layout/content-layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ContentLayoutModule],
  providers: [],
  // todo: export needed for ContentLayoutComponent
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
