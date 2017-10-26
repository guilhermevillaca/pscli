import { FormaSelecaoComponent } from './forma-selecao/forma-selecao.component';
import { PrcSeletivoComponent } from './prc-seletivo/prc-seletivo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'formaSelecao', component: FormaSelecaoComponent},  
  { path: 'prcSeletivo', component: PrcSeletivoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'formaSelecao' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
