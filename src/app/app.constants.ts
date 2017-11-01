import { Injectable } from '@angular/core';
@Injectable()
export class Configuration {
    //public Server = 'http://midas.unioeste.br/';
    public Server = 'http://localhost:8080/';
    public AppUrl = 'processos-seletivos/';
    public ServerUrl = this.Server + this.AppUrl;
}