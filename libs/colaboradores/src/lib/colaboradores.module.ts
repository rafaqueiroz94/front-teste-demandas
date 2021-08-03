
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarColaboradoresComponent } from './listar-colaboradores/listar-colaboradores.component';
import { ColaboradoresRoutingModule } from './colaboradores.routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ColaboradoresService } from './services/colaboradores.service';
import { GerenciarCadastroComponent } from './gerenciar-cadastro/gerenciar-cadastro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  imports: [
    CommonModule,
    ColaboradoresRoutingModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    NgxMaskModule,
    NgxMaskModule.forRoot(),
    ToastModule

  ],
  declarations: [
    ListarColaboradoresComponent,
    GerenciarCadastroComponent
  ],
  exports: [
    ListarColaboradoresComponent,
    GerenciarCadastroComponent
  ],
  providers: [
    ColaboradoresService,
    MessageService,
  ]
})

export class ColaboradoresModule { }
