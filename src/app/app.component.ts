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

  constructor(private chamadaApi : ApiserviceService,
              private rota: Router,
              public web : HttpClient) { }

  ngOnInit() {
  }

  realizarLogin(email, senha) {
    this.chamadaApi.buscarUsuario(email, senha).subscribe (retornoApi => {
      console.log(retornoApi);
      this.chamadaApi.salvarUsuario(JSON.stringify(retornoApi));
    });
  }

}
