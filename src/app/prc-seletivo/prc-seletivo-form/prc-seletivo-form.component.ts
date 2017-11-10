import { PrcSeletivo } from './../prc-seletivo.models';
import { PrcSeletivoService } from './../prc-seletivo.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prc-seletivo-form',
  templateUrl: './prc-seletivo-form.component.html',
  styleUrls: ['./prc-seletivo-form.component.css']
})
export class PrcSeletivoFormComponent implements OnInit {
  formTitle = 'Cadastro novo Processo';
  processo: PrcSeletivo;

  constructor(private _prcSeletivoService: PrcSeletivoService, private _route: ActivatedRoute) {
    this.processo = new PrcSeletivo();
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      if (params['prcSltCodigo'] != null) {
        this._prcSeletivoService.getById(params['prcSltCodigo'])
          .then(result => {
            this.processo.initJSON(result['data'])
          });
      }
    });
  }

  onSubmit(processo: PrcSeletivo) {
    //if (this.formulario.valid) {
    this._prcSeletivoService.save(processo);
    //} else {
    //this.verificaValidacoesForm(this.formulario);
    //}
  }

  /*resetar() {
    this.formulario.reset();
  }*/

  /*verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }*/



  /*verificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }*/

  aplicaCssErro(campo) {
    //teste
  }

}
