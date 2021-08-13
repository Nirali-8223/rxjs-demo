import { Component, OnInit } from '@angular/core';
import { from, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil, takeWhile, tap, toArray } from 'rxjs/operators';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  takeWhileAlbumData: any[]=[];
  takeLastAlbumData: any[] = [];
  takeAlbumData: any[] = [];

  constructor(private _dataService:ServiceService) { }
  albumsData:any;
  ngOnInit(): void {

    this.albumsData =[
      {
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "sunt qui excepturi placeat culpa"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "omnis laborum odio"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "non esse culpa molestiae omnis sed optio"
      },
      {
        "userId": 1,
        "id": 5,
        "title": "eaque aut omnis a"
      },
      {
        "userId": 1,
        "id": 6,
        "title": "natus impedit quibusdam illo est"
      },
      {
        "userId": 1,
        "id": 7,
        "title": "quibusdam autem aliquid et et quia"
      },
      {
        "userId": 1,
        "id": 8,
        "title": "qui fuga est a eum"
      },
      {
        "userId": 1,
        "id": 9,
        "title": "saepe unde necessitatibus rem"
      },
      {
        "userId": 1,
        "id": 10,
        "title": "distinctio laborum qui"
      },
      {
        "userId": 2,
        "id": 11,
        "title": "quam nostrum impedit mollitia quod et dolor"
      },
      {
        "userId": 2,
        "id": 12,
        "title": "consequatur autem doloribus natus consectetur"
      }]


      // Ex -01 
      from(this.albumsData).pipe(take(5)).subscribe(
        data => {
          this.takeAlbumData.push(data)
        })

      

      //  Ex -02
       from(this.albumsData).pipe(takeLast(5)).subscribe(
        data => this.takeLastAlbumData.push(data)
      )


      // Ex-03
      const source = interval(1000)

      let condition = timer(10000)

      source.pipe(
        map(data => 'Album ' +  data),
        takeUntil(condition)
      ).subscribe(data=>{
        this._dataService.print(data,'elContainer')
      })

       // Ex-04
       from(this.albumsData).pipe(
         takeWhile((data:any) => data.userId == 1)
       ).subscribe(data=>{
         this.takeWhileAlbumData.push(data)
       })
  }

  
}
