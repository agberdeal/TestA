import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  private templateRef: TemplateRef<any>;
  private viewContainerRef : ViewContainerRef;

  constructor(tr: TemplateRef<any>, vcr: ViewContainerRef){
    this.templateRef = tr;
    this.viewContainerRef = vcr;
  }

  @Input() set unless(condition: boolean) {
      if(condition) {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
      else{
          this.viewContainerRef.clear();
      }
  }
}
