import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState, messages } from '../state';

@Component({
  selector: 'app-ontvanger',
  templateUrl: './ontvanger.component.html',
  styleUrls: ['./ontvanger.component.css']
})
export class OntvangerComponent implements OnInit {
  public berichten:string[] = [];

  constructor(private stoor:Store<IState>) { }

  ngOnInit(): void {
    this.stoor.select(messages).subscribe(ber=>this.berichten = ber);
  }

}
