import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidacaoBrasilModule } from 'projects/validacao-brasil/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ValidacaoBrasilModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
