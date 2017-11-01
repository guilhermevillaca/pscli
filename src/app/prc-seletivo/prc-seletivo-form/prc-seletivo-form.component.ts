import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-prc-seletivo-form',
  templateUrl: './prc-seletivo-form.component.html',
  styleUrls: ['./prc-seletivo-form.component.css']
})
export class PrcSeletivoFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({      
      prcSltCodigo: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      prcSltDescricao: [null, Validators.required],
      prcSltNmrConvenio: [null, Validators.required],
      prcSltNmrCnvEletronico: [null, Validators.required],
      prcSltBltDtEmissao: [null, Validators.required],
      prcSltBltDtVencimento: [null, Validators.required],
      prcSltDtHrTrmReimpressao: [null, Validators.required],
      prcSltDtHrTrmInscricao: [null, Validators.required],
      mncCdgSede: [null, Validators.required]      
    });
    
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('do stuff');
      
    } else {
      this.verificaValidacoesForm(this.formulario);
    }
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  verificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

}
