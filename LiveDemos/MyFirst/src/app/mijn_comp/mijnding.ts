import { style } from "@angular/animations";
import { Component } from "@angular/core";


@Component({
  selector:'patrick',
  // template:'<h1>Hello Patrick</h1>',
  //styles:['h1 {color:red}'],
  templateUrl:'./mijn.html',
  styleUrls:['./mijn.css']

})
export class MijnComponent {
  public name:string = "test";
  public zichtbaar: boolean = false;

  public doeIets()
  {
    this.name = "Doet Iets";
    this.zichtbaar = !this.zichtbaar;
  }
}
