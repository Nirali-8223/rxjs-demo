import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  list!: string[];
  list2!: any[];

  constructor() { }

  ngOnInit(): void {

    //Ex-01 
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


     from(users).pipe(
       pluck('name'),
       toArray()
     ).subscribe(res=>{
       this.list = res;
     })

     from(users).pipe(
      pluck('location','city'),
      toArray()
    ).subscribe(res=>{
      this.list2 = res;
    })
  }

}
