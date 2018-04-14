import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsuarioComponent} from './usuario/usuario.component';

@Injectable()
export class ApiserviceService {

  urlCEP: "https://viacep.com.br/ws"

  constructor(public web : HttpClient) { }

  buscarEndereco(cep) {
    let formu=new FormData();
    formu.append('cep', cep);
    //formu.append('json', 'json');
    formu.append('callback', 'meu_callback');

    return this.web.post(this.urlCEP, formu);
  }

}
