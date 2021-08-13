import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private _dataService:ServiceService) { }
  obs:any;
  ngOnInit(): void {
    //of Example - argument convert in observable stream

    //Ex- 1 for value convert into observable stream

    of('John','Adam','Jack').subscribe(res=>{
      this._dataService.print(res,'elContainer')
    })

    //Ex- 1 for object convert into observable stream

   of({CEO:'John',PM:'Adam',HR:'Jack'}).subscribe(res=>{
       this.obs = res
    })

    // from Example - Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.

    // Ex- 1 Array Convert Into Observable 
    from(['Cricket','Badminton','Chess']).subscribe(res=>{
      this._dataService.print(res,'elContainer3')
    })

     // Ex- 2 Promise to Observable 
     let promise = new Promise((resolve)=>{
      resolve('Promise Resolved')
     })
     from(promise).subscribe((res)=>{
      this._dataService.print(res,'elContainer4')
     })

     // Ex-3 String to Observable
    
     from('Welcome!').subscribe((res)=>{
      this._dataService.print(res,'elContainer5')
     })


  }

}
