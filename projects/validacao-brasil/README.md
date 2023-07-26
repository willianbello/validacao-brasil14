# Validação Brasil

Contem pipes / directives / validators / Angular

Suporte para o Angular 12, 13, 14, 15 e 16

|  Versão Angular |  Versão Validacao-Brasil Compatível  |
| ------------ | ------------ |
| 12  | 12.2.4  |
| 13  | 13.3.4  |
| 14  | 14.2.4  |
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
Titulo Eleitor
Data

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
    Titulo Eleitor
    Data
    SoNumeroSemEspaco  =>  bSoNumeroSemEspaco
    SoNumeroComEspaco =>   bSoNumeroComEspaco
    bSoLetrasSemEspaco  => bSoLetrasSemEspaco
    bSoLetrasComEspaco  => bSoLetrasComEspaco

diretivas de só numero ou só letra não permitem que seja digitado no input qualquer valor que não seja numero ou letra.

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
		soNumeros: [''],
		soLetrasComEspaco: [''],
		data: ['', ValidacaoBrasil.data(true, true, this.dataMin, this.dataMax)],
		titulo: ['', ValidacaoBrasil.tituloEleitor(false)],
		cnpj: ['', ValidacaoBrasil.cnpj()],
		cep: ['', ValidacaoBrasil.cep()],
		telefone: ['', ValidacaoBrasil.telefone(false)],
		celular: ['', ValidacaoBrasil.celular(true)]
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
	data => { data: true }, { min: true }, { max: true }, { range: true }
	titulo => { titulo: true }

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
	
	

    <form [formGroup]="form" style="width: 70%; margin: auto; margin-top: 50px;">
      <div style="display: flex; justify-content: space-around; flex-wrap: wrap; width: 100%;">
    
        <div style="margin-top: 20px; width: 33%; text-align: center;">
          <mat-form-field appearance="outline">
            <mat-label>CPF</mat-label>
            <input matInput placeholder="CPF" formControlName="cpf" bCpf>
            <mat-error *ngIf="form.get('cpf')?.hasError('cpf')">CPF inválido</mat-error>
            <mat-error *ngIf="form.get('cpf')?.hasError('required')">CPF é obrigatório</mat-error>
          </mat-form-field>
        </div>
    
        <div style="margin-top: 20px; width: 33%; text-align: center;">
          <mat-form-field appearance="outline">
            <mat-label>Celular</mat-label>
            <input matInput placeholder="Celular" formControlName="celular">
            <mat-error *ngIf="form.get('celular')?.hasError('celular')">Celular inválido</mat-error>
            <mat-error *ngIf="form.get('celular')?.hasError('nove')">Celular precisa começar com 9</mat-error>
            <mat-error *ngIf="form.get('celular')?.hasError('required')">Celular é obrigatório</mat-error>
          </mat-form-field>
        </div>
    
        <div style="margin-top: 20px; width: 33%; text-align: center;">
          <mat-form-field appearance="outline">
            <mat-label>Só Numero</mat-label>
            <input matInput placeholder="Celular" formControlName="soNumeros" bSoNumeroSemEspaco>
          </mat-form-field>
        </div>
    
        <div style="margin-top: 20px; width: 33%; text-align: center;">
          <mat-form-field appearance="outline">
            <mat-label>Só Letras com Espaço</mat-label>
            <input matInput placeholder="Celular" formControlName="soLetrasComEspaco" bSoLetrasComEspaco>
          </mat-form-field>
        </div>
    
        <div style="margin-top: 20px; width: 33%; text-align: center;">
          <mat-form-field appearance="outline">
            <mat-label>Data</mat-label>
            <input matInput placeholder="Data" formControlName="data" bData [ano4Digitos]="true">
            <mat-error *ngIf="form.get('data')?.hasError('required')">Data é obrigatória</mat-error>
            <mat-error *ngIf="form.get('data')?.hasError('data')">Data Inválida </mat-error>
            <mat-error *ngIf="form.get('data')?.hasError('min')">Data precisa ser maior que {{ dataMin }}</mat-error>
            <mat-error *ngIf="form.get('data')?.hasError('max')">Data precisa ser menor que {{ dataMax }}</mat-error>
            <mat-error *ngIf="form.get('data')?.hasError('range')">Data precisa ser maior que {{ dataMin }} e menor que {{
              dataMax }}</mat-error>
          </mat-form-field>
        </div>
    
        <div style="margin-top: 20px; width: 33%; text-align: center;">
          <mat-form-field appearance="outline">
            <mat-label>Titulo Eleitor</mat-label>
            <input matInput placeholder="Titulo Eleitor" formControlName="titulo" bTituloEleitor>
            <mat-error *ngIf="form.get('titulo')?.hasError('required')">Titulo é obrigatório</mat-error>
            <mat-error *ngIf="form.get('titulo')?.hasError('titulo')">Titulo inválido</mat-error>
          </mat-form-field>
        </div>
    
        <div style="width: 100%; text-align: center; margin-top: 30px;">
          <button type="button" [disabled]="form.invalid" mat-raised-button color="primary">Form Válido</button>
        </div>
      </div>
    
    </form>

#### Validação de Data
Sobre a validação de data há agora 4 possíbilidades de validar.
1 - Simples validação se é um data válida.
2 - Se a data é superior a mínima
3 - Se é inferior a máxima
4 - Se está dentro do range.

OBS:
1º parâmetro é se é um campo obrigatório como todas as validações
2º parâmetro é se o ano deve ter 4 dígitos (padrão true), mudando para false irá aceitar tanto 2 quanto 4. Exemplo: *26/07/23 ou 26/07/2023*

Diretiva é chamada: bData

    data: ['', ValidacaoBrasil.data(true, true, this.dataMin, this.dataMax)],

Por padrão, dataMin e dataMax são null. Se colocar só o dataMin será validado somente o inicio, se colocar somente o dataMax será validado somente o final e se colocar os dois será validade o range.



    <mat-form-field appearance="outline">
            <mat-label>Data</mat-label>
            <input matInput placeholder="Data" formControlName="data" bData [ano4Digitos]="true">
            <mat-error *ngIf="form.get('data')?.hasError('required')">Data é obrigatória</mat-error>
            <mat-error *ngIf="form.get('data')?.hasError('data')">Data Inválida </mat-error>
            <mat-error *ngIf="form.get('data')?.hasError('min')">Data precisa ser maior que {{ dataMin }}</mat-error>
            <mat-error *ngIf="form.get('data')?.hasError('max')">Data precisa ser menor que {{ dataMax }}</mat-error>
            <mat-error *ngIf="form.get('data')?.hasError('range')">Data precisa ser maior que {{ dataMin }} e menor que {{
              dataMax }}</mat-error>
          </mat-form-field>

para uma data simples inválidade é retornado um:
    { data: true }
	
quando a data é inferior ao minData é retornado:
    { min: true }
	
quando a data é superior ao maxData é retornado:
    { max: true }
	
quando a data é inferior ao minData ou superior ao dataMax é retornado:
    { range: true }
	
#### Validação Titulo Eleitor
Quando há um erro no numero do título é retornado:
{ titulo: true }

Diretiva é chamada: bTituloEleitor




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
