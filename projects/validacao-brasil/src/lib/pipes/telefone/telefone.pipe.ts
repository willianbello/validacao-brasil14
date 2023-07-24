import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../../utils/utils';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: string | number, ddd: boolean = true, ddd3Digitos: boolean = false): string {

    let telefoneFormatado = value.toString();

    if (telefoneFormatado && telefoneFormatado.length >= 8) {
      telefoneFormatado = Utils.addMascaraTelefone(telefoneFormatado, telefoneFormatado.length + 1, ddd, ddd3Digitos);
    }
    return telefoneFormatado;
  }

}
