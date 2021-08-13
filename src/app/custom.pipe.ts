import { Pipe,PipeTransform } from "@angular/core";



@Pipe({name:'custom'})

export class CustomPipe implements PipeTransform {

    transform(value:number,pow:number = 1) : any {
      return Math.pow(value,pow)
    }
}


// 2 | custom : powValue => 10
