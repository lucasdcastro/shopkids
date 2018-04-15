import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProdutosComponent } from './produtos/produtos.component';
import { RoupasComponent } from './produtos/roupas/roupas.component';
import { MoveisComponent } from './produtos/moveis/moveis.component';
import { BrinquedosComponent } from './produtos/brinquedos/brinquedos.component';
import { AcessoriosComponent } from './produtos/acessorios/acessorios.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    IndexComponent,
    CarrinhoComponent,
    ProdutosComponent,
    RoupasComponent,
    MoveisComponent,
    BrinquedosComponent,
    AcessoriosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
