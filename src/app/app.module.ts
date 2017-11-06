import { RouterModule } from '@angular/router';
import { Configuration } from './app.constants';
import { SharedModule } from './shared/shared.module';
//import { FormaSelecaoModule } from './forma-selecao/forma-selecao.module';
import { AppRoutingModule } from './app-routing.module';
import { PrcSeletivoModule } from './prc-seletivo/prc-seletivo.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormaSelecaoModule } from './forma-selecao/forma-selecao.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrcSeletivoModule,
    AppRoutingModule,
    FormaSelecaoModule,
    SharedModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    Configuration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
