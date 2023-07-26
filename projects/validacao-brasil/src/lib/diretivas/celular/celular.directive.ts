import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Utils } from '../../utils/utils';

@Directive({
  selector: '[bCelular]'
})
export class CelularDirective {

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    this.keyDown(event)
  }

  @Input() ddd: boolean = true;
  @Input() ddd3Digitos: boolean = false;

  tamMax: number = 10;

  constructor(
    private el: ElementRef,
  ) { }

  ngOnInit() {
    if (this.ddd && this.ddd3Digitos) {
      this.tamMax = 12;
    } else if (this.ddd && !this.ddd3Digitos) {
      this.tamMax = 11;
    } else {
      this.tamMax = 9;
    }
  }

  keyDown(event: KeyboardEvent) {

    const numeros = Utils.retornaSoNumero(this.el.nativeElement.value);

    if ((Utils.soNumeros(event)) && ((numeros.length) < this.tamMax) || Utils.backSpace(event)) {

      if (numeros) {
        this.el.nativeElement.value = Utils.addMascaraCelular(numeros, this.tamMax, this.ddd, this.ddd3Digitos);
      }
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  }

}
