import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  nameList!: { id: number; name: string; skil: string; gender: string; }[];
  genderList!: { id: number; name: string; skil: string; gender: string; }[];

  constructor() { }

  ngOnInit(): void {

    const employeeList = [
      {
        id:1,
        name:'Nirali',
        skil:'Angular',
        gender:'Female'
      },
      {
        id:2,
        name:'dolly',
        skil:'HTML',
        gender:'Female'
      },
      {
        id:3,
        name:'Rahul',
        skil:'Laravel',
        gender:'Male'
      },
      {
        id:4,
        name:'Riya',
        skil:'Php',
        gender:'Female'
      },
      {
        id:5,
        name:'Mehul',
        skil:'Wordpress',
        gender:'Male'
      },
      {
        id:6,
        name:'Kalp',
        skil:'Ios',
        gender:'Male'
      }

    ]


    from(employeeList).pipe(
      filter(data=> data.name.length > 4),
      toArray()
    ).subscribe(res=>{
      this.nameList = res;
    })


    from(employeeList).pipe(
      filter(data=> data.gender == 'Female'),
      toArray()
    ).subscribe(res=>{
      this.genderList = res;
    })

  }

}
