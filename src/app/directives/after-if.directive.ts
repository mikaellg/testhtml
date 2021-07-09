import { Directive, AfterContentInit, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[after-if]'
})
export class AfterIfDirective implements AfterContentInit {
  @Output('after-if') onAfter: EventEmitter<boolean> = new EventEmitter();
  @Input() condition: Array<any>;


  ngAfterContentInit(): void {
    if (this.condition) {
        this.onAfter.emit(this.condition.length > 0);
    } else {
      this.onAfter.emit(false);
    }
  }

  constructor() { }

}
