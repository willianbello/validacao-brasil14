import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../../utils/utils';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string | number): string {
    
    let cpfFormatado = value.toString();

    if (cpfFormatado && cpfFormatado.length == 11) {
      cpfFormatado = Utils.addMascaraCpf(cpfFormatado, 12);
    }
    return cpfFormatado;
  }

}
