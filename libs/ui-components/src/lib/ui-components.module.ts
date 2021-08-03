import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimengModule } from 'apps/front/src/app/shared/primeng.module';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { BadgeNotificationComponent } from './badge-notification/badge-notification.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule
  ],
  declarations: [
    HeaderComponent,
    BadgeNotificationComponent,
    SidebarComponent,
    TableComponent,
    DialogComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    TableComponent,
    BadgeNotificationComponent,
    DialogComponent
    ]
})
export class UiComponentsModule { }
