import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DesignerModule } from '@grapecity/spread-sheets-designer-angular'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DesignerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
