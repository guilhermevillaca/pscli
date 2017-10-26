import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class PrcSeletivoService {

  constructor(private http: Http) { }

  getProcessos(){
    //return this.http.get('http://localhost:8080/processos-seletivos/prcSeletivo/teste').map((res: Response) => res.json());
    return this.http.get('http://localhost:8080/processos-seletivos/prcSeletivo/teste').map(res => res).subscribe(dados => console.log(dados));
  }

}
