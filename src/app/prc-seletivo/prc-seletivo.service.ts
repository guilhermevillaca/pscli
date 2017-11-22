import { Configuration } from './../app.constants';
import { PrcSeletivo } from './prc-seletivo.models';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { convertToParamMap } from '@angular/router';
import * as $ from 'jquery/dist/jquery.min.js';

@Injectable()
export class PrcSeletivoService {
  private urlLocal: string;
  private urlSave: string;
  private urlGetById: string;
  private urlRemove: string;
  constructor(private _httpClient: HttpClient, private _configuration: Configuration) {
    this.urlLocal = this._configuration.ServerUrl + 'prcSeletivo/listaProcessos';
    this.urlSave = this._configuration.ServerUrl + 'prcSeletivo/salvar';
    this.urlGetById = this._configuration.ServerUrl + 'prcSeletivo/getById/';
    this.urlRemove = this._configuration.ServerUrl + 'prcSeletivo/remove/';
  }

  getProcessos() {
    return this._httpClient.get(this.urlLocal).toPromise();
  }

  save(processo: PrcSeletivo) { 
    console.log(processo);         
    let req = this._httpClient.post(this.urlSave, $.param(processo.toJSON()), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    });
    req.subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  getById(prcSltCodigo){
    return this._httpClient.get(this.urlGetById+prcSltCodigo).toPromise();
  }

  remove(prcSltCodigo){
    return this._httpClient.delete(this.urlRemove+prcSltCodigo).toPromise();
  }

}
