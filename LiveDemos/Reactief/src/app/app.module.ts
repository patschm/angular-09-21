import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Zeurvis, IZeurable } from './zeurvis';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{ provide:IZeurable, useClass:Zeurvis}],
  bootstrap: [AppComponent]
})
export class AppModule { }
