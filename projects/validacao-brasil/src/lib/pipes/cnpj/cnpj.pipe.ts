import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../../utils/utils';

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {

  transform(value: string | number): string {
    
    let cnpjFormatado = value.toString();

    if (cnpjFormatado && cnpjFormatado.length == 14) {
      cnpjFormatado = Utils.addMascaraCnpj(cnpjFormatado, 15);
    }
    return cnpjFormatado;
  }

}
