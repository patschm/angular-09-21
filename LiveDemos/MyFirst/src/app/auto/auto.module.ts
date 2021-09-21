import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheComponent } from './the/the.component';
import { The2Component } from './the2/the2.component';



@NgModule({
  declarations: [
    TheComponent,
    The2Component
  ],
  imports: [
    CommonModule
  ]
})
export class AutoModule { }
