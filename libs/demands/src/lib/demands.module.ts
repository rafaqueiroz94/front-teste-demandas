
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandsRoutingModule } from './demands-routing.module';
import { UiComponentsModule } from 'libs/ui-components/src';
import { HttpClientModule } from '@angular/common/http';
import { PrimengModule } from 'apps/front/src/app/shared/primeng.module';

import { MessageService } from 'primeng/api';

import { DemandsListComponent } from './demands-list/demands-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UiComponentsModule,
    DemandsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  declarations: [
    DemandsListComponent
  ],
  exports: [
    DemandsListComponent
  ],
  providers: [
    MessageService,
  ]
})
export class DemandsModule { }
