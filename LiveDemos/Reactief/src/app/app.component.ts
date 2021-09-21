import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, of, Subject, Subscription, throwError } from 'rxjs';
import { concatMap, debounceTime, delay, exhaustMap, first, map, mergeMap, switchMap, take, tap, throttleTime } from 'rxjs/operators'
import { IZeurable, Zeurvis } from './zeurvis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:[Zeurvis]
})
export class AppComponent implements OnInit, OnDestroy
{
  public showdata: Observable<string> | string | number | undefined;
  private counter:number = 0;
  private data$: Subject<number> = new Subject();
  public nrgen$: Observable<number> = interval(1000);
  private subs1: Subscription | undefined;

  private zv: IZeurable | undefined;

  constructor(zeur:IZeurable, private http:HttpClient)
  {
    this.zv = zeur;
  }

  public doClick()
  {
    this.zv?.doeIets("hallo");
      this.counter++;
      this.data$.next(this.counter);
      //this.data$.complete();
  }

  private haalop(nr:number) : Observable<string>
  {
    console.log(nr);
    return of("Back_"+nr).pipe(delay(Math.random() * 5000));
  }

  ngOnDestroy(): void {
    this.subs1?.unsubscribe();
  }

  async ngOnInit() {
    //this.subs1 = this.data$.pipe(tap(dt=>console.log(dt)), throttleTime(500)).subscribe(arg=> this.showdata = arg);
    //this.nrgen$.pipe(take(8), map(nr=>nr*10)).subscribe(nr=>this.showdata = nr);
    this.nrgen$.pipe(exhaustMap(nr=>this.haalop(nr))).subscribe(nr=> this.showdata = nr);
   // let result = await this.http.get("https://localhost:5001/productgroups", {observe:"response"}).toPromise();
   // console.log(result);

   this.http.get("https://localhost:5001/productgroups", {observe:"response"})
   .subscribe(
        data=> console.log(data),
        err=>console.error(err.message),
        ()=>console.warn("klaar"));
  }
}
