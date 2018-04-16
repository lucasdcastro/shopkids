import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiserviceService} from "../../apiservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-roupas',
  templateUrl: './roupas.component.html',
  styleUrls: ['./roupas.component.css']
})
export class RoupasComponent implements OnInit {

  constructor(private chamadaApi : ApiserviceService,
              private rota: Router,
              public web : HttpClient) { }

  ngOnInit() {
  }

  mostrarProduto(item) {
    console.log(event.target);
  }

}
