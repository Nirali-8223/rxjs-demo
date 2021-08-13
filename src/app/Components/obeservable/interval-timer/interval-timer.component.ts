import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Subscription, timer } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.scss']
})
export class IntervalTimerComponent implements OnInit,AfterViewInit {

  @ViewChild('addVideo') addVideo!:ElementRef;
  showObsMsg:string = ''
  videoSubscription!: Subscription;
  constructor(private _dataService:ServiceService) { }

  ngOnInit(): void {
    let timerVideo = timer(5000,1000)
    timerVideo.subscribe(res=>{
      this._dataService.print('video'+res,'elContainertimer')
    })
  }

  ngAfterViewInit(){
    fromEvent(this.addVideo.nativeElement,'click').subscribe(res=>{
      let brodcastVideo = interval(1000)
      this.videoSubscription = brodcastVideo.subscribe(res=>{
         this.showObsMsg = 'Video' +  res
         this._dataService.print(this.showObsMsg,'elContainer')
      })
    })
  }

  onChannelUnsubscribe(){
    this.showObsMsg = ''
    this.videoSubscription.unsubscribe()
   }



}
