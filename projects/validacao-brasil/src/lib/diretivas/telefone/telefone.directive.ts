import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Utils } from '../../utils/utils';

@Directive({
  selector: '[bTelefone]'
})
export class TelefoneDirective {

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
      this.tamMax = 11;
    } else if (this.ddd && !this.ddd3Digitos) {
      this.tamMax = 10;
    } else {
      this.tamMax = 8;
    }
  }

  keyDown(event: KeyboardEvent) {

    const numeros = Utils.retornaSoNumero(this.el.nativeElement.value);

    if ((Utils.soNumeros(event)) && ((numeros.length) < this.tamMax) || Utils.backSpace(event)) {

      if (numeros) {
        this.el.nativeElement.value = Utils.addMascaraTelefone(numeros, this.tamMax, this.ddd, this.ddd3Digitos);
      }
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  }

}
