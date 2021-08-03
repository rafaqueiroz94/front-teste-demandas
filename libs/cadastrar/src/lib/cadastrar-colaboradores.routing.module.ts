import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarColaboradoresComponent } from './cadastrar-colaboradores/cadastrar-colaboradores.component';
import { CadastroLoteComponent } from './cadastro-lote/cadastro-lote.component';

 
 
const cadastrarColaboradoresRoutes: Routes = [
  {
    path: '',
    component: CadastrarColaboradoresComponent
  },
  {
    path: 'cadastrolote',
    component: CadastroLoteComponent
  }
  
];
 
@NgModule({
  imports: [RouterModule.forChild(cadastrarColaboradoresRoutes)],
  exports: [RouterModule]
})
export class CadastrarColaboradoresRoutingModule { }