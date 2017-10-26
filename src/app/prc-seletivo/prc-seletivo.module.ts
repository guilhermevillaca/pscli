import { PrcSeletivoComponent } from './prc-seletivo.component';
import { PrcSeletivoService } from './prc-seletivo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PrcSeletivoComponent
  ],
  providers:[
    PrcSeletivoService
  ]
})
export class PrcSeletivoModule { }
