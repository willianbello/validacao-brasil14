import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Utils } from '../../utils/utils';

@Directive({
  selector: '[bSoNumeroSemEspaco]'
})
export class SoNumeroSemEspacoDirective {

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    this.keyDown(event)
  }

  @Input() tamMax: number = 99999;

  constructor(
    private el: ElementRef,
  ) { }

  keyDown(event: KeyboardEvent) {

    const numeros = Utils.retornaSoNumero(this.el.nativeElement.value);

    if ((Utils.soNumeros(event)) && ((numeros.length) < this.tamMax) || Utils.setasEBackSpace(event)) {
      return;
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  }

}
