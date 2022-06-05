import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import {map,filter} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  private firtsObsSubscription:Subscription;
  constructor() { }
  ngOnInit() {
    /*
    this.firtsObsSubscription=interval(1000).subscribe(count =>{
      console.log(count);
    });
    */
   const customeIntervalObservable = Observable.create(observer=>{
    let count=0;
    setInterval( ()=>{
      observer.next(count);

      if(count===3){
        observer.complete();
      }
      if(count>4){
        observer.error(new Error('Count is greater than 4'));
      }
      count++;
    },1000);
   });

   this.firtsObsSubscription= customeIntervalObservable.pipe(
     filter((data:number)=>{
       return data%2 ===0;
     }),
    map((data:number)=>{
      return 'Round '+(data+1);
    })
   ).subscribe(data=>{
    console.log(data);
   },
   error=>{
     console.log(error.message);
   },
   ()=>{
     console.log('Completed');
   }
   );
  }

  ngOnDestroy(): void {
    this.firtsObsSubscription.unsubscribe();
  }

}
