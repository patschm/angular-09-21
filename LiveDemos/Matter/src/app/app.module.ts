import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';

import {MatButtonModule} from '@angular/material/button';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:"component1",
    component: Component1Component
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
