
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarColaboradoresComponent } from './cadastrar-colaboradores/cadastrar-colaboradores.component';
import { CadastrarColaboradoresRoutingModule } from './cadastrar-colaboradores.routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ColaboradoresService } from './services/colaboradores.service';
import { InputMaskModule } from 'primeng/inputmask';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  imports: [
    CommonModule,
    CadastrarColaboradoresRoutingModule,
    TableModule,
    ButtonModule,
    ToastModule,
    CommonModule,
    InputMaskModule,
    NgxMaskModule,
    NgxMaskModule.forRoot(),


  ],
  declarations: [
    CadastrarColaboradoresComponent
  ],
  exports: [
    CadastrarColaboradoresComponent
  ],
  providers: [
    ColaboradoresService,
    MessageService,
  ]

})
export class CadastrarColaboradoresModule { }
