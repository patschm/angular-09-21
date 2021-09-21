import { Injectable } from "@angular/core";

export abstract class IZeurable {
  doeIets(data:string) : void
  {

  }
}
@Injectable()
export class Zeurvis implements IZeurable
{
  private counter:number = 0;

  public doeIets(data:string) : void
  {
    this.counter++;
    console.log(data + " " + this.counter);
  }
}
