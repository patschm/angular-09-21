import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MijnComponent } from "./mijn_comp/mijnding";
import { MijnDirective } from "./mijn_comp/mijndirective";

@NgModule({
  declarations:[AppComponent, MijnComponent, MijnDirective],
  exports:[AppComponent, MijnComponent],
  imports:[BrowserModule],
  providers:[],
  bootstrap:[MijnComponent]
})
export class MijnModule
{}
