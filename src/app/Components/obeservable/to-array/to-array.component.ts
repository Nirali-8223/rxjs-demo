import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription,of} from 'rxjs';
import {take ,toArray} from 'rxjs/operators'
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  obs2: any;
  obs3: any;

  constructor(private _DataService:ServiceService) { }
  sourceSub!: Subscription

  user:any = [
    {
   id:1,
   name:'nirali'
  },
  {
    id:1,
    name:'nirali'
   }
  ]
  

  ngOnInit(): void {

    // Ex-01

    const source = interval(1000)
    
    this.sourceSub = source.pipe(
      take(5),
      toArray()
    ).subscribe(res=>{
      from(res).subscribe(data=>{
        this._DataService.print(data,'elContainer')
      })
    })

    // Ex-02

    const source2 = from(this.user)
    
     source2.pipe(
      toArray()
    ).subscribe(res=>{
      this.obs2 = res
    })


     // Ex-03 => set data in of operator convert into an array

     const source3 = of('Nirali','shah')
    
     source3.pipe(
      toArray()
    ).subscribe(res=>{
      this.obs3 = res
    })
  
  }


    
    
  

}