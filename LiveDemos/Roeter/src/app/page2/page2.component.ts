import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  public value: number | undefined;

  constructor(private ra: ActivatedRoute) { }

  ngOnInit(): void {
    this.ra.params.subscribe(pars=>this.value = +pars.id)
  }

}
