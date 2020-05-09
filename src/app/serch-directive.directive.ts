import { Directive , OnInit , HostListener, ElementRef , Input } from '@angular/core';

@Directive({
  selector: '[appSerchDirective]'
})
export class SerchDirectiveDirective {

  constructor(private e1: ElementRef ) {
      }
// tslint:disable-next-line:no-input-rename
@Input('appSerchDirective') colortext: string;
  ngOninit(){

  }
  @HostListener('click') onclick() {
    alert(this.colortext);
    // tslint:disable-next-line:no-unused-expression
    this.e1.nativeElement.style.backgroundColor  = this.colortext;
    }
}
