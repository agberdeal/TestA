import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private elementRef: ElementRef;
  private renderer: Renderer;

  constructor(elementRefb: ElementRef, rendererb: Renderer) {
    this.elementRef= elementRefb;

    // Esto es alternativo al metodo de mas abajo
    //this.elementRef.nativeElement.style.backgroundColor = 'blue';

    this.renderer=rendererb;
    this.renderer.setElementStyle(this.elementRef.nativeElement,
                                  'background-color',
                                  'blue');
  }

}
