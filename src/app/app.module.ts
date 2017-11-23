import { RouterModule } from '@angular/router';
import { Configuration } from './app.constants';
import { SharedModule } from './shared/shared.module';
//import { FormaSelecaoModule } from './forma-selecao/forma-selecao.module';
import { AppRoutingModule } from './app-routing.module';
import { PrcSeletivoModule } from './prc-seletivo/prc-seletivo.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePtPt from '@angular/common/locales/pt-PT';
import { AppComponent } from './app.component';
import { FormaSelecaoModule } from './forma-selecao/forma-selecao.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MyDatePickerModule } from 'mydatepicker';
import { InscricaoComponent } from './inscricao/inscricao.component';
import { InscricaoModule } from './inscricao/inscricao.module';
registerLocaleData(localePtPt);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrcSeletivoModule,
    InscricaoModule,
    AppRoutingModule,
    FormaSelecaoModule,
    SharedModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MyDatePickerModule 
  ],
  providers: [
    Configuration
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
