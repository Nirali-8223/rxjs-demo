import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
declare var $: any
@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  posts: any[] = [];
  comments: any[] = [];
  
  name:string = 'hello'
  constructor(private _dataService:ServiceService) { }
  uploadedFiles: any[]=[];
  fileName:string = ''
  isLoadingData:boolean = false;
  mobileRes: any;

  ngOnInit(): void {
    this.name = "myName"
  }
  
  buyMobile(){
   $('#buyMobile').modal('show')
  }

  isSamsungAvailable(){
    return true
  }

  onMobile(){
    $('#buyMobile').modal('hide')
   this.isLoadingData = true
    let buyMobile = new Promise((resolve,reject)=>{
     if(this.isSamsungAvailable()){
      setTimeout(()=>{
       resolve('Yes Samsung Mobile is Available!')
       this.isLoadingData = false
      },3000)
     }
    })
    buyMobile.then((res=>{
      this.mobileRes = res; 
    })).catch((res)=>{
      this.mobileRes = res; 
    })
  }

  // fetch data using promise
  showPost(){
    let res =this._dataService.getPost().toPromise()
    res.then((data)=>{
     const stringData = JSON.stringify(data)
     this.posts = JSON.parse(stringData)
    }).catch((data)=>{
      console.log(JSON.stringify(data))
    })
  }

  // fetch data using async & await
  async showComment(){
    let res = await this._dataService.getComments().toPromise()
    const stringData = JSON.stringify(res)
    this.comments = JSON.parse(stringData)
  }


  // There is only difference between async , await and promise

  // 1. by defult functions are not available for error handling  in async and await

  // 2. The async function returns a promise. The converse is also true. Every function that returns a promise can be considered as async function.
  
  // 3. await is used for calling an async function and waits for it to resolve or reject
 
  // In short I like to say aschroynous code is always return in promise.

}

