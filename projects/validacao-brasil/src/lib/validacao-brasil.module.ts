import { NgModule } from '@angular/core';

import { CelularDirective } from './diretivas/celular/celular.directive';
import { CepDirective } from './diretivas/cep/cep.directive';
import { CnpjDirective } from './diretivas/cnpj/cnpj.directive';
import { CpfDirective } from './diretivas/cpf/cpf.directive';
import { TelefoneDirective } from './diretivas/telefone/telefone.directive';
import { SoLetrasComEspacoDirective } from './diretivas/so-letras-com-espaco/so-letras-com-espaco.directive';
import { SoLetrasSemEspacoDirective } from './diretivas/so-letras-sem-espaco/so-letras-sem-espaco.directive';
import { SoNumeroComEspacoDirective } from './diretivas/so-numero-com-espaco/so-numero-com-espaco.directive';
import { SoNumeroSemEspacoDirective } from './diretivas/so-numero-sem-espaco/so-numero-sem-espaco.directive';
import { DataDirective } from './diretivas/data/data.directive';
import { TituloEleitorDirective } from './diretivas/titulo-eleitor/titulo-eleitor.directive';

import { CelularPipe } from './pipes/celular/celular.pipe';
import { CepPipe } from './pipes/cep/cep.pipe';
import { CnpjPipe } from './pipes/cnpj/cnpj.pipe';
import { CpfPipe } from './pipes/cpf/cpf.pipe';
import { TelefonePipe } from './pipes/telefone/telefone.pipe';



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
    SoLetrasComEspacoDirective,
    SoLetrasSemEspacoDirective,
    SoNumeroComEspacoDirective,
    SoNumeroSemEspacoDirective,
    DataDirective,
    TituloEleitorDirective,
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
    SoLetrasComEspacoDirective,
    SoLetrasSemEspacoDirective,
    SoNumeroComEspacoDirective,
    SoNumeroSemEspacoDirective,
    DataDirective,
    TituloEleitorDirective,
  ]
})
export class ValidacaoBrasilModule { }
