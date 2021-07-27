import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Primeng Modules
import { BadgeModule } from 'primeng/badge';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';

const primeng = [
  BadgeModule,
  TableModule,
  InputTextModule,
  DropdownModule,
  InputTextareaModule,
  ButtonModule,
  FileUploadModule,
  CheckboxModule,
  ToastModule,
  TabViewModule
]

@NgModule({
  imports: [
    CommonModule,
    ...primeng
  ],
  exports: [
    ...primeng
  ],
  declarations: [],
  providers: [],
})
export class PrimengModule { }
