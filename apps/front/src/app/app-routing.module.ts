import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'colaboradores',
    loadChildren: () => import('@ever-team/colaboradores').then(m => m.ColaboradoresModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('@ever-team/cadastrar').then(m => m.CadastrarModule)
  },
 
  {
    path: 'demandas',
    loadChildren: () => import('@ever-team/demands').then(m => m.DemandsModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }