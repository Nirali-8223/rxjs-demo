import { Component, OnDestroy, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Observable, Observer, Subscription, SubscriptionLike } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomObservableComponent implements OnInit,OnDestroy {
  status!: string;
  status2!:string;
  subs2!: Subscription;
  constructor(private _dataService:ServiceService) { }

  ngOnInit(): void {

    // Ex-01 Create Manual data
    const cusObs1 = Observable.create((observer: Observer<string> ) =>{
      setTimeout(()=>{
        observer.next('Angular')
      },2000)

      setTimeout(()=>{
        observer.next('Html & Css')
      },4000)

      setTimeout(()=>{
        observer.next('Typescript')
        observer.error('error')
      },6000)
      
      setTimeout(()=>{
        observer.next('Jquery')
        observer.complete();
      },8000)
      
    })
    
    cusObs1.subscribe((res:any)=>{
      this._dataService.print(res,'elContainer')
    },
    (err:string)=>{
      this.status = 'error'
    },
    ()=>{
      this.status = 'completed'

    }
    )
    // subscribe(data,err,complete)
    
    
    // Ex-02 Custom Interval Observable
    let techArray = ['Angular','Html & Css','Typescript','Jquery']
    let count = 0;
    const cusObs2 = Observable.create((observer: Observer<string> )=>{
      setInterval(()=>{
      observer.next(techArray[count])
      if(count >= 3 ){
        observer.complete()
        this.status2 = 'completed'
      }
      count++;
      },1000)
    })
    
    this.subs2=cusObs2.subscribe((data:any)=>{
      this._dataService.print(data,'elContainer2')
    })
    
  }

  ngOnDestroy(){
    this.subs2.unsubscribe();
  }

}
 