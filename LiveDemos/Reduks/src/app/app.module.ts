import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ZenderComponent } from './zender/zender.component';
import { OntvangerComponent } from './ontvanger/ontvanger.component';
import { FormsModule } from '@angular/forms';



function berichtenReducer(ouweMeuk:string[] = [], aktie: any)
{
  if (aktie.type === "[Message] nieuw")
  {
    let ns  = [...ouweMeuk, aktie.payload]
    return ns;
  }
  return ouweMeuk;
}

@NgModule({
  declarations: [
    AppComponent,
    ZenderComponent,
    OntvangerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ berichten:berichtenReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
