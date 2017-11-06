import { Configuration } from './../app.constants';
import { PrcSeletivo } from './prc-seletivo.models';
import { Http, Response } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PrcSeletivoService {
  private urlLocal: string;

  constructor(private http: HttpClient, private _configuration: Configuration) {
    this.urlLocal = this._configuration.ServerUrl + 'prcSeletivo/listaProcessos';
  }

  getProcessos() {
    return this.http.get(this.urlLocal).toPromise();
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }


}
