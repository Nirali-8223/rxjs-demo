import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  print(value:any,domId:string){
    let el = document.createElement('li');
    el.innerText = value
    document.getElementById(domId)?.append(el)
  }

  getPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getComments(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }

  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums')
  }


}
