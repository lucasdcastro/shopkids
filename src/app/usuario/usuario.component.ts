import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ApiserviceService, HttpClient]
})
export class UsuarioComponent implements OnInit {

  cep: '';
  endereco = '';
  rua = '';
  bairro = '';
  cidade = '';
  estado = '';
  complemento = '';
  numero = '';
  retornoApi : any;
  json : any;

  constructor(private chamadaApi : ApiserviceService,
              private rota: Router,
              public web : HttpClient) { }

  ngOnInit() {
  }
  conferirCep(cep){
    console.log(cep);
    if (cep.length == 8) {
      this.web.get('http://viacep.com.br/ws/' +
        cep + '/json/').subscribe ( ret => {
        let p: any = ret;
        this.endereco = p.logradouro;
        this.cidade = p.localidade;
        this.bairro = p.bairro;
        this.estado = p.uf;
        this.complemento = p.complemento;
        console.log(this.endereco);
        console.log(this.cidade);
        console.log(this.bairro);
        console.log(this.estado);

      });
    }
  }

  buscaPorCep(cep) {

  }

}
