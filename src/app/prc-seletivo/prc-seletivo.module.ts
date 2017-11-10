import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrcSeletivoComponent } from './prc-seletivo.component';
import { PrcSeletivoService } from './prc-seletivo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrcSeletivoFormComponent } from './prc-seletivo-form/prc-seletivo-form.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    PrcSeletivoComponent,
    PrcSeletivoFormComponent
  ],
  providers: [
    PrcSeletivoService
  ]
})
export class PrcSeletivoModule { }
