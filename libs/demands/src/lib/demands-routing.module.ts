import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandsListComponent } from './demands-list/demands-list.component';

export const routes: Routes = [
  {
    path: 'demandas',
    component: DemandsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandsRoutingModule { }