import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
// import { SubPageComponent } from './sub/sub-page/sub-page.component';
// import { SubPage1Component } from './sub/sub-page1/sub-page1.component';
// import { SubPage2Component } from './sub/sub-page2/sub-page2.component';
// import { SubPage3Component } from './sub/sub-page3/sub-page3.component';
// import { SubModule } from './sub/sub.module';

const routes: Routes =[
  {
    path:"page1",
    component: Page1Component
  },
  {
    path:"page2/:id",
    component: Page2Component
  },
  {
    path:"page3",
    component: Page3Component
  },
  {
    path:"subpage",
    loadChildren: () => import('./sub/sub.module').then(m=>m.SubModule)
  },
  {
    path:"**",
    component: Page1Component
  },
  {
    path:"",
    redirectTo:"/page1",
    pathMatch:"full"
  }
];


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
