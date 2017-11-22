import { PrcSeletivo } from './prc-seletivo.models';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PrcSeletivoService } from './prc-seletivo.service';

@Component({
  selector: 'app-prc-seletivo',
  templateUrl: './prc-seletivo.component.html',
  styleUrls: ['./prc-seletivo.component.css']
})
export class PrcSeletivoComponent implements OnInit {
  prcSeletivo: PrcSeletivo[];
  constructor(private _prcSeletivoService: PrcSeletivoService) { }

  ngOnInit() {
    this.getPrc();
  }

  getPrc() {
    this._prcSeletivoService.getProcessos()
      .then(result => {
        this.prcSeletivo = result['data'];
      });
  }

  remove(prcSltCodigo){
    this._prcSeletivoService.remove(prcSltCodigo).then(
      result => {
        //se ocorrer td bem a exclusão foi um sucesso. então chama o método para recarregar o grid.
        this.getPrc();
      }
    );
  }
}





