import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ApiserviceService} from "./apiservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiserviceService, HttpClient]
})
export class AppComponent {

  title = 'app';
  login = '';
  senha = '';
  nome = '';

  constructor(private chamadaApi : ApiserviceService,
              private rota: Router,
              public web : HttpClient) {


  }

  ngOnInit() {
    let json = this.chamadaApi.pegarUsuario();
    this.nome = JSON.parse(json).usuarioNome;
  }

  conferirLogin() {
    return this.chamadaApi.verificarLogin();
  }

  buscarNome() {
      let json = this.chamadaApi.pegarUsuario();
      console.log(json);
      this.nome = JSON.parse(json).usuarioNome;
  }


  realizarLogin(email, senha) {
    this.chamadaApi.buscarUsuario(email, senha).subscribe (retornoApi => {
      console.log(retornoApi);
      this.chamadaApi.salvarUsuario(JSON.stringify(retornoApi));
      this.rota.navigate(['/**']);
    });
  }

}
