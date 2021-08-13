import { Component, OnInit } from '@angular/core';
import { AsyncSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'rxjs-demo';

  subject4 = new AsyncSubject<number>();

  ngOnInit(){

   this.subject4.next(1);
    this.subject4.next(2);
  
     this.subject4.subscribe( var1  => {
      console.log('subscription41 /'+var1+'/');
    });
    console.log('-----------------------------------');
    this.subject4.next(3);
  }

  // Rxjs is a libary of reactive programing.This libary is used for angular and also non-angular application.
  // Rxjs is used for create asynchronus code and handle that code using multiple operators.
}
