import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerenciarCadastroComponent } from './gerenciar-cadastro/gerenciar-cadastro.component';
import { ListarColaboradoresComponent } from './listar-colaboradores/listar-colaboradores.component';

 
 
const colaboradoresRoutes: Routes = [
  {
    path: '',
    component: ListarColaboradoresComponent
  },
  {
    path: 'gerenciar/:id',
    component: GerenciarCadastroComponent
  }
  //{
    //path: 'criar-vagas',
    //component: AberturaDeVagasComponent
  //},
];
 
@NgModule({
  imports: [RouterModule.forChild(colaboradoresRoutes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }