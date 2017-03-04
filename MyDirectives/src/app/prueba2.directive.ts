import { Directive, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appPrueba2]'
})
export class Prueba2Directive {
 
  @HostListener('mouseenter') mouseIn(){
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') mouseOut(event){
    this.backgroundColor = this.defaultColor;
  };

  /** 
  @HostListener('mouseleave', ['$event']) mouseOut(event){
    this.backgroundColor = this.defaultColor;
    console.log("Event Target" +  event.target);
  };
  **/

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  

  @Input('defaultcolor')  defaultColor = 'green';
  @Input('highlight')  highlightColor = 'red';  

  private backgroundColor = this.defaultColor;

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

  
}
