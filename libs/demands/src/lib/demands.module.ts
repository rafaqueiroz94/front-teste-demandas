import { CalendarModule } from 'primeng/calendar';
import { DemandsCreateComponent } from './demands-create/demands-create.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandsRoutingModule } from './demands-routing.module';
import { UiComponentsModule } from 'libs/ui-components/src';
import { HttpClientModule } from '@angular/common/http';
import { PrimengModule } from 'apps/front/src/app/shared/primeng.module';

import { MessageService } from 'primeng/api';

import { DemandsListComponent } from './demands-list/demands-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    UiComponentsModule,
    DemandsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    ToastModule,
    CalendarModule
  ],
  declarations: [
    DemandsListComponent,
    DemandsCreateComponent
  ],
  exports: [
    DemandsListComponent,
    DemandsCreateComponent
  ],
  providers: [
    MessageService,
  ]
})
export class DemandsModule { }
