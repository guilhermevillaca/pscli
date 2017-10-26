import { Component, OnInit } from '@angular/core';

import { PrcSeletivoService } from './prc-seletivo.service';

@Component({
  selector: 'app-prc-seletivo',
  templateUrl: './prc-seletivo.component.html',
  styleUrls: ['./prc-seletivo.component.css']
})
export class PrcSeletivoComponent implements OnInit {

  processos: string = "";
  constructor(private prcSeletivoService: PrcSeletivoService) {
    console.log(prcSeletivoService.getProcessos());
  }

  ngOnInit() {
  }




}
