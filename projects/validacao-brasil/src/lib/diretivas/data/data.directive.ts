import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Utils } from '../../utils/utils';

@Directive({
  selector: '[bData]'
})
export class DataDirective {

  @Input() ano4Digitos: boolean = true;

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    this.keyDown(event)
  }

  tamMax: number = 6;

  constructor(
    private el: ElementRef,
  ) { }

  ngOnInit() {
    if (this.ano4Digitos) {
      this.tamMax = 8;
    } else {
      this.tamMax = 6;
    }
  }

  keyDown(event: KeyboardEvent) {

    const numeros = Utils.retornaSoNumero(this.el.nativeElement.value);

    if ((Utils.soNumeros(event)) && ((numeros.length) < this.tamMax) || Utils.backSpace(event)) {

      if (numeros) {
        this.el.nativeElement.value = Utils.addMascaraData(numeros, this.tamMax);
      }
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  }

}
