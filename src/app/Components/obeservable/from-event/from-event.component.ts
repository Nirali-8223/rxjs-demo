import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit,AfterViewInit {

  @ViewChild('addVideo') addVideo!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    let count  = 1
    fromEvent(this.addVideo.nativeElement,'click').subscribe(res=>{
      let countValue = 'Video'+ count++
      this.print(countValue);
    }

    )
  }

  print(value:string){
    let el = document.createElement('li');
    el.innerText= value
    document.getElementById('elContainer')?.append(el)
  }
}
