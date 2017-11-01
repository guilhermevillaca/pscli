import { Configuration } from './../app.constants';
import { PrcSeletivo } from './prc-seletivo.models';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class PrcSeletivoService {
  private urlLocal: string;
  constructor(private http: Http, private _configuration: Configuration) {
    this.urlLocal = this._configuration.ServerUrl + 'prcSeletivo/listaProcessos';
  }

  getProcessos(){
    return this.http.get(this.urlLocal)
      .map((response: Response) => response.json());
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }


}
