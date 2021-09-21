import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState, NieuwAction } from '../state';

@Component({
  selector: 'app-zender',
  templateUrl: './zender.component.html',
  styleUrls: ['./zender.component.css']
})
export class ZenderComponent implements OnInit {

  public bericht:string = "";

  public doSend()
  {
    let msg = new NieuwAction(this.bericht);// { type:"[Message] nieuw", payload:this.bericht };
    this.stoor.dispatch(msg);
  }
  constructor(private stoor:Store<IState>) { }

  ngOnInit(): void {
  }

}
