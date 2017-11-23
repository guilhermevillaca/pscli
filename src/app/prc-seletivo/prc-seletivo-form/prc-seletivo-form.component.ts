import { log } from 'util';
import { PrcSeletivoService } from './../prc-seletivo.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IMyDpOptions } from 'mydatepicker';
import { PrcSeletivo } from '../../models/prc-seletivo.models';

@Component({
  selector: 'app-prc-seletivo-form',
  templateUrl: './prc-seletivo-form.component.html',
  styleUrls: ['./prc-seletivo-form.component.css']
})
export class PrcSeletivoFormComponent implements OnInit {
  formTitle = 'Processo Seletivo';
  processo: PrcSeletivo;

  constructor(private _prcSeletivoService: PrcSeletivoService, private _route: ActivatedRoute, private elementRef: ElementRef) {
    this.processo = new PrcSeletivo();
  }

  public datePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy'
  };

  ngOnInit() {
    this._route.params.subscribe(params => {
      if (params['prcSltCodigo'] != null) {
        this._prcSeletivoService.getById(params['prcSltCodigo'])
          .then(result => {
            this.processo.initJSON(result['data'])
          });
      }
    });
    /*let s = document.createElement("script");
    s.type = "text/javascript";
    s.text = `
    $(function () {      
      $("#prcSltBltDtEmissao").datepicker();      
    });
    `;
    this.elementRef.nativeElement.appendChild(s);*/
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
