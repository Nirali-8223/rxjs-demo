import { HostBinding, HostListener, Input, OnChanges } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appRedColor]'
})

export class RedColorDirective implements OnChanges{

   @Input( 'appRedColor') name!:string;
  @HostBinding(`style.color`) borderColor = 'red'
  constructor(elref:ElementRef) {
    elref.nativeElement = this.borderColor;
   }

   ngOnChanges(){
     if(this.name=='myName'){
       this.borderColor = 'pink'
     }
   }

   @HostListener('mouseover') 
   onMouseOver() {
     this.borderColor = 'red';
     console.log("Mouse over")
   }
  
   @HostListener('mouseleave') 
   onMouseLeave() {
     this.borderColor = 'yellow';
     console.log("Mouse Leave")
   }

}


