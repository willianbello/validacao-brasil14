import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../../utils/utils';

@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {

  transform(value: string | number): string {
    
    let cepFormatado = value.toString();

    if (cepFormatado && cepFormatado.length == 8) {
      cepFormatado = Utils.addMascaraCep(cepFormatado, 9);
    }
    return cepFormatado;
  }

}
