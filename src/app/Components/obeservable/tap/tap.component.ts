import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  subs1!: Subscription;
  subs2!: Subscription;
  colorName!: string;

  constructor(private _dataService:ServiceService) { }

  ngOnInit(): void {

    const source =  interval(1500)

    let users = [
      {
        id:1,
        name:'Nirali',
        location:{
         city:'Jamnagar',
         state:'Gujarat'
        }
      },
      {
        id:2,
        name:'Priya',
        location:{
          city:'Jamnagar',
          state:'Gujarat'
         }
      },
      {
        id:3,
        name:'Riya',
        location:{
          city:'Rajkot',
          state:'Gujarat'
         }
      },
      {
        id:4,
        name:'Nisha',
        location:{
          city:'Ahmadabad',
          state:'Gujarat'
         }
      },
      {
        id:5,
        name:'Poonam',
        location:{
          city:'Baroda',
          state:'Gujarat'
         }
      }
  ]

    this.subs1 =source.pipe(
    tap(res=>{
      if(res == 4){
        this.subs1.unsubscribe();
      }
    })
  ).subscribe(data=>{
    this._dataService.print(users[data].name,'elContainer')
  })


  // Ex-02
  let colorArray = ['Red','Green','Pink','Purple','Violet']
  this.subs2 =source.pipe(
    tap(res=>{ 
      this.colorName = colorArray[res]
    if(res == 5){
      this.subs2.unsubscribe(); 
    }
  }),
  map(res=> colorArray[res]),
  ).subscribe(data=>{
    this._dataService.print(data,'elContainer2')
  })

  }

}
