import { RouterModule } from '@angular/router';
import { FormaSelecaoComponent } from './forma-selecao.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
      CommonModule,
      RouterModule 
    ],
    declarations: [
        FormaSelecaoComponent
    ],
    exports: [
        FormaSelecaoComponent
    ]
  })
export class FormaSelecaoModule{

}