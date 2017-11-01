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
  teste;
  constructor(private prcSeletivoService: PrcSeletivoService) {}
  
  ngOnInit() {
    this.getPrc();
  }

  getPrc() {
    this.prcSeletivoService.getProcessos()
    .subscribe(data => {      
      this.prcSeletivo = data;      
    });
    /**
     * pode ser usado then que vai funcionar igual. no service tb há mudanças. ver comentários lá.
     * .then(data=> this.prcSeletivo = data)
     */
  }
}





