
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandsCreateComponent } from './demands-create/demands-create.component';
import { DemandsListComponent } from './demands-list/demands-list.component';

export const routes: Routes = [
  {
    path: '',
    component: DemandsListComponent
  },
  {
    path: 'create',
    component: DemandsCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandsRoutingModule { }