import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import {UsuarioComponent} from './usuario/usuario.component';
const routes: Routes = [
  {path:'index', component : IndexComponent},
  {path: 'usuario', component : UsuarioComponent},
  {path:'**', component : IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
