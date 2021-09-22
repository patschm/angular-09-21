import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubPage1Component } from './sub-page1/sub-page1.component';
import { SubPageComponent } from './sub-page/sub-page.component';
import { SubPage2Component } from './sub-page2/sub-page2.component';
import { SubPage3Component } from './sub-page3/sub-page3.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {
    path:"",
    component:SubPageComponent,
    children:[{
      path:"sub1",
      component:SubPage1Component
    },
    {
      path:"sub2",
      component:SubPage2Component
    },
    {
      path:"sub3",
      component:SubPage3Component
    },
    {
      path:"",
      redirectTo:"sub1",
      pathMatch:"full"
    }]
  }
];

@NgModule({
  declarations: [
    SubPage1Component,
    SubPageComponent,
    SubPage2Component,
    SubPage3Component
  ],
  exports: [
    SubPage1Component,
    SubPageComponent,
    SubPage2Component,
    SubPage3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SubModule { }
