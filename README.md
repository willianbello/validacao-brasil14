# Validação Brasil

Contem pipes / directives / validators / Angular

Suporte para o Angular 12, 13, 14, 15 e 16

|  Versão Angular |  Versão Validacao-Brasil Compatível  |
| ------------ | ------------ |
| 12  | 12.2.2  |
| 13  | 13.3.2  |
| 14  | 14.2.1  |
| 15  | 15.2.0  |
| 16  | 16.1.0  |


Este projeto foi testado somente com Angular 12, 13, 14, 15 e 16 puro e com material, mas não tem nenhuma dependência fora do próprio framework,
todo o código foi criado com Typescript e Javascript puro para evitar outras dependências.

Atualmente tem as seguintes opções:

### Validações:
CPF
CNPJ
CEP
Telefone
Celular

### Pipes:
CPF
CNPJ
CEP
Telefone
Celular

### Diretivas:
CPF
CNPJ
CEP
Telefone
Celular

## Importação
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    
    import { AppComponent } from './app.component';
    
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { ValidacaoBrasilModule } from 'validacao-brasil';
    
    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ValidacaoBrasilModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }





## Sobre Validações:
    import { ValidacaoBrasil } from 'validacao-brasil';
    
    this.form = this.fb.group({
    	cpf: ['', ValidacaoBrasil.cpf()],
    	cnpj: ['', ValidacaoBrasil.cnpj()],
    	cep: ['', ValidacaoBrasil.cep()],
    	telefone: ['', ValidacaoBrasil.telefone(false)],
    	celular: ['', ValidacaoBrasil.celular(true, true, true)]
    })

o primeiro parâmetro de todas as validações é se ele é "required" ou não.
se for "required" e houver erro ira retorna um objeto { required: true }.

para as outras validações será enviado um objeto com o nome da validação.
Exemplo:

    cpf => { cpf: true }
    cnpj => { cnpj: true }
    cep => { cep: true }
    telefone => { telefone: true }
    celular => { celular: true }

OBS: para o celular há uma validação adicional que é a verificação de começar com 9
será enviado o objeto: *{ nove: true }* quando ele não começar com 9.

***FIQUE ATENTO A VARIÁVEL "TEM DDD" E "DDD3DIGITOS" TANTO NO FORMS QUANTO NO ELEMENTO HTML SE FOR UTILIZAR MASCARA.***

No caso dos telefones há mais configurações disponíveis como:
tem ddd?
  segundo parâmetro (boolean)
o ddd tem 3 dígitos?
  terceiro parâmetro (boolean)

    celular: ['', ValidacaoBrasil.celular(true, true, true)]

    cpf: 48103288055 | {{ '48103288055' | cpf }}
    cnpj: 76601670000125 | {{ '76601670000125' | cnpj }}
    cep: 77064202 | {{ '77064202' | cep }}
    
    telefone: 5131234567 | {{ '5131234567' | telefone }}
    telefone: 05131234567 | {{ '05131234567' | telefone:true:true }}
    telefone: 31234567 | {{ '31234567' | telefone:false }}
    
    celular: 51991234567 | {{ '51991234567' | celular }}
    celular: 051991234567 | {{ '051991234567' | celular:true:true }}
    celular: 991234567 | {{ '991234567' | celular:false }}
  
      <div>
          <p>Celular</p>
          <input type="text" formControlName="celular" 
     placeholder="celular" bCelular [ddd]="false" [ddd3Digitos]="true">
          
          <span *ngIf="form.get('celular')?.hasError('celular')">celular inválido</span><br>
          <span *ngIf="form.get('celular')?.hasError('required')">celular requerido</span>
          <span *ngIf="form.get('celular')?.hasError('nove')">celular precisa começar com 9</span>
        
          <p>Telefone</p>
          <input type="text" formControlName="telefone" placeholder="telefone" bTelefone>
          
          <span *ngIf="form.get('telefone')?.hasError('telefone')">telefone inválido</span><br>
          <span *ngIf="form.get('telefone')?.hasError('required')">telefone requerido</span>
        </div>
    
        <div>
          <p>CEP</p>
          <input type="text" formControlName="cep" placeholder="cep" id="cep" bCep>
          <br><br>
          <span *ngIf="form.get('cep')?.hasError('cep')">cep inválido</span><br>
          <span *ngIf="form.get('cep')?.hasError('required')">cep requerido</span>
        </div>



# ValidacaoBrasil14

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
