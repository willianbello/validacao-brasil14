import { Directive, ElementRef, HostListener } from '@angular/core';
import { Utils } from '../../utils/utils';

@Directive({
  selector: '[bCpf]'
})
export class CpfDirective {

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    this.keyDown(event)
  }

  tamMax: number = 11;

  constructor(
    private el: ElementRef,
  ) { }

  keyDown(event: KeyboardEvent) {

    const numeros = Utils.retornaSoNumero(this.el.nativeElement.value);

    if ((Utils.soNumeros(event)) && ((numeros.length) < this.tamMax) || Utils.backSpace(event)) {

      if (numeros) {
        this.el.nativeElement.value = Utils.addMascaraCpf(numeros, this.tamMax);
      }
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  }

}
