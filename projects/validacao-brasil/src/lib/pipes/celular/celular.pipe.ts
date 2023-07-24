import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../../utils/utils';

@Pipe({
  name: 'celular'
})
export class CelularPipe implements PipeTransform {

  transform(value: string | number, ddd: boolean = true, ddd3Digitos: boolean = false): string {
    
    let celularFormatado = value.toString();

    if (celularFormatado && celularFormatado.length >= 9) {
      celularFormatado = Utils.addMascaraCelular(celularFormatado, celularFormatado.length + 1, ddd, ddd3Digitos);
    }
    return celularFormatado;
  }

}
