import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsuarioComponent} from './usuario/usuario.component';

@Injectable()
export class ApiserviceService {

  urlUsuario: string = "http://localhost:8081/usuarios";

  constructor(public web : HttpClient) { }


  buscarUsuario(email, senha) {
    /*let formu=new FormData();
    formu.append('usuarioEmail', email);
    formu.append('usuarioSenha', senha);
    console.log(senha);*/
    return this.web.get(this.urlUsuario + '?usuarioEmail=' + email + '&usuarioSenha=' + senha);
  }

  salvarUsuario(usuario) {
    sessionStorage.setItem('usuario', usuario);
  }

  verificarLogin() {
    if(sessionStorage.getItem('usuario')) {
      return true;
    } else {
      return false;
    }
  };

  pegarUsuario() {
    return sessionStorage.getItem('usuario');
  }

  deslogar() {
    sessionStorage.removeItem('usuario');
  }

}
