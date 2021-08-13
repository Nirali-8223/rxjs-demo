import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private _dataService:ServiceService) { }
  subs1 !: Subscription;
  subs2 !: Subscription;
  ngOnInit(): void {

    // Ex - 01
    const brodcastVideos =  interval(1000)

    this.subs1 = brodcastVideos.pipe(
      map(data => 'Video' + data)
    ).
    subscribe(res=>{
      this._dataService.print(res,'elContainer')
    })

    setInterval(()=>{
     this.subs1.unsubscribe();
    },10000)


    // Ex - 02
    const brodcastCalcSeries =  interval(1000)

    this.subs2 = brodcastCalcSeries.pipe(
      map(data => data + 5)
    ).
    subscribe(res=>{
      this._dataService.print(res,'elContainer2')
    })

    setInterval(()=>{
     this.subs2.unsubscribe();
    },10000)


     // Ex - 03
     const employess  = [
       {id:1,name:'nirali'},
       {id:1,name:'alex'},
       {id:1,name:'john'},
       {id:1,name:'xyz'}
     ]   
     
    from(employess).pipe(
       map((data:any) => data.name)
     ).subscribe((res:any)=>{
       console.log(res);
       this._dataService.print(res,'elContainer3')
     })
  }

}
