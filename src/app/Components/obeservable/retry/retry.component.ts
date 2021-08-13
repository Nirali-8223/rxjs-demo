import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan, tap } from 'rxjs/operators';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  comments: any;
  fetching: string = 'Fetch Details';
  count:Number = 0;
  constructor(private _dataService:ServiceService) { }

  ngOnInit(): void {  }
  
  
  fetchData(){
    this.fetching = 'Loading data....'
    this._dataService.getComments().pipe(
     retryWhen(err => err.pipe(
       delay(1000),
       scan((retryCount = 0)=>{
        if(retryCount >= 5){
          throw err;    
        } else{
          retryCount = retryCount + 1 ;
          this.count = retryCount;
          this.fetching = 'Retry Attempt#'
          return retryCount;
        }
       },0)
     ))
    ).subscribe(data=>{
      this.comments = data;
      this.count = 0;
      this.fetching = 'Data Successfully Fetched';
    },
    (err)=>{
      this.count = 0;
      this.fetching = 'Problem Fetching the Data';
    }
    )

  }

}
