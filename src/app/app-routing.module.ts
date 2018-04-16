import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import {UsuarioComponent} from './usuario/usuario.component';
import {ProdutosComponent} from './produtos/produtos.component';
import {AcessoriosComponent} from './produtos/acessorios/acessorios.component';
import {BrinquedosComponent} from './produtos/brinquedos/brinquedos.component';
import {MoveisComponent} from './produtos/moveis/moveis.component';
import {RoupasComponent} from './produtos/roupas/roupas.component';
import {CarrinhoComponent} from './carrinho/carrinho.component';

const routes: Routes = [
  {path: 'index', component : IndexComponent},
  {path: 'usuario', component : UsuarioComponent},
  {path: 'produtos', component : ProdutosComponent},
  {path: 'produtos/acessorios', component : AcessoriosComponent},
  {path: 'produtos/brinquedos', component : BrinquedosComponent},
  {path: 'produtos/moveis', component : MoveisComponent},
  {path: 'produtos/roupas', component : RoupasComponent},
  {path: 'produtos', component : ProdutosComponent},
  {path: 'carrinho', component : CarrinhoComponent},
  {path: '**', component : IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
