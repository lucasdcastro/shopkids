import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { RoupasComponent } from './produtos/roupas/roupas.component';
import { BrinquedosComponent } from './produtos/brinquedos/brinquedos.component';
import { AcessoriosComponent } from './produtos/acessorios/acessorios.component';
import { MoveisComponent } from './produtos/moveis/moveis.component';




@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    IndexComponent,
    ProdutosComponent,
    RoupasComponent,
    BrinquedosComponent,
    AcessoriosComponent,
    MoveisComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
