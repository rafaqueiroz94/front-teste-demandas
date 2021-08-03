import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Imports referentes aos componentes  do projeto
import { CadastrarColaboradoresComponent } from './cadastrar-colaboradores/cadastrar-colaboradores.component';
import { CadastrarColaboradoresRoutingModule } from './cadastrar-colaboradores.routing.module';
import { FileUploadComponent } from './shared/file-upload/file-upload.component';
import { FileUploadStorageService } from './Services/file-upload-storage.service';
import { CadastroService } from './Services/cadastro.service';
import { CadastroLoteComponent } from './cadastro-lote/cadastro-lote.component';

//Imports referentes ao primeng 
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';

const primeng = [
  TableModule,
  ButtonModule,
  InputTextModule,
  DropdownModule,
  FileUploadModule,
  ToastModule
]

import { NgxMaskModule, IConfig } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CadastrarColaboradoresRoutingModule,
    ...primeng,
    InputMaskModule,
    NgxMaskModule,
    NgxMaskModule.forRoot(),


  ],
  declarations: [
    CadastrarColaboradoresComponent,
    CadastroLoteComponent,
    FileUploadComponent,

  ],
  exports: [
    CadastrarColaboradoresComponent,
    CadastroLoteComponent,
    FileUploadComponent

  ],
  providers: [
    CadastroService,
    FileUploadStorageService,
    MessageService

  ]

})
export class CadastrarModule { }

