import { NgModule } from '@angular/core';
import { CpfDirective } from './diretivas/cpf/cpf.directive';
import { CnpjDirective } from './diretivas/cnpj/cnpj.directive';
import { CepDirective } from './diretivas/cep/cep.directive';
import { TelefoneDirective } from './diretivas/telefone/telefone.directive';
import { CelularDirective } from './diretivas/celular/celular.directive';
import { CpfPipe } from './pipes/cpf/cpf.pipe';
import { CnpjPipe } from './pipes/cnpj/cnpj.pipe';
import { CepPipe } from './pipes/cep/cep.pipe';
import { TelefonePipe } from './pipes/telefone/telefone.pipe';
import { CelularPipe } from './pipes/celular/celular.pipe';



@NgModule({
  declarations: [
    CpfDirective,
    CnpjDirective,
    CepDirective,
    TelefoneDirective,
    CelularDirective,
    CpfPipe,
    CnpjPipe,
    CepPipe,
    TelefonePipe,
    CelularPipe,
  ],
  imports: [],
  exports:[
    CpfDirective,
    CnpjDirective,
    CepDirective,
    TelefoneDirective,
    CelularDirective,
    CpfPipe,
    CnpjPipe,
    CepPipe,
    TelefonePipe,
    CelularPipe,
  ]
})
export class ValidacaoBrasilModule { }
