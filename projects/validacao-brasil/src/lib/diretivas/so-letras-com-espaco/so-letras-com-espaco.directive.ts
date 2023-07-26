import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Utils } from '../../utils/utils';

@Directive({
  selector: '[bSoLetrasComEspaco]'
})
export class SoLetrasComEspacoDirective {

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    this.keyDown(event)
  }

  @Input() tamMax: number = 99999;

  constructor(
    private el: ElementRef,
  ) { }

  keyDown(event: KeyboardEvent) {

    const frase = Utils.retornaSoLetras(this.el.nativeElement.value);

    if ((Utils.soLetras(event)) && ((frase.length) < this.tamMax) || Utils.setasEBackSpaceESpace(event)) {
      return;
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  }

}
