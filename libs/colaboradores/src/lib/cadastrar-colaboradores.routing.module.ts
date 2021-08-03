import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarColaboradoresComponent } from './cadastrar-colaboradores/cadastrar-colaboradores.component';

 
 
const cadastrarColaboradoresRoutes: Routes = [
  {
    path: '',
    component: CadastrarColaboradoresComponent
  },
  //{
    //path: 'criar-vagas',
    //component: AberturaDeVagasComponent
  //},
];
 
@NgModule({
  imports: [RouterModule.forChild(cadastrarColaboradoresRoutes)],
  exports: [RouterModule]
})
export class CadastrarColaboradoresRoutingModule { }