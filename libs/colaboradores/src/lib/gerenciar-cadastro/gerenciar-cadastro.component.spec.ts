import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { GerenciarCadastroComponent } from './gerenciar-cadastro.component';
import { of } from 'rxjs';
// import { Colaboradores } from '../Services/colaboradores.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ColaboradoresService } from '../services/colaboradores.service';
import { Colaboradores } from '../models/colaboradores';


describe('GerenciarCadastroComponent', () => {
  let component: GerenciarCadastroComponent;
  let fixture: ComponentFixture<GerenciarCadastroComponent>;

let mockRouter = {
    navigate: jasmine.createSpy('navigate')
};

let mockColaboradoresService: jasmine.SpyObj<ColaboradoresService>;
let mockMessageService: jasmine.SpyObj<MessageService>;
let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;



const formBuilder = new FormBuilder().group({
  sap: ['2213', [Validators.required]],
  nome: ['oii',[Validators.required]],
  sobrenome: ['oii', [Validators.required]],
  CPF: ['3213', [Validators.required]],
  nome_projeto: ['iuiu', [Validators.required]],
  EXT_projeto: ['213213', [Validators.required]],
  status: [''],
  telefone: ['3213123',[Validators.required]],
  dt_admissao: ['123123',[Validators.required]],
  matriz: [''],
  tp_contratacao: [''],
  un_negocio: [''],
  tp_atuacao: [''],
  RACF: ['21312',[Validators.required]],
  funcional: ['213123',[Validators.required]],
  CSR: [''],
  logadouro: ['aaaa',[Validators.required]],
  numero: ['123',[Validators.required]],
  complemento: [''],
  bairro: ['aaaaa',[Validators.required]],
  cidade: [''],
  UF: [''],
  perfil: [''],
  nome_lider: ['aaaa',[Validators.required]],
  sobrenome_lider: ['aaaa',[Validators.required]],
  PRE: ['1245',[Validators.required]],
  ARE: ['1234',[Validators.required]],

}) 


  beforeEach(async () => {
    mockColaboradoresService = jasmine.createSpyObj('CadastroService', ['getColaboradores', 'createColaboradores']);
      mockMessageService = jasmine.createSpyObj('MessageService', ['add']);
      

    await TestBed.configureTestingModule({
      declarations: [ GerenciarCadastroComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        ButtonModule, 
        InputTextModule, 
        DropdownModule,
        RouterTestingModule,
        HttpClientTestingModule,
        
      ],
      providers: [
          FormBuilder,
          { provide: Router, useValue: mockRouter },
          { provide: ColaboradoresService, useValue: mockColaboradoresService },
          { provide: MessageService, useValue: mockMessageService },
          { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });




  it('should create', () => {
    expect(component).toBeTruthy();
    
  });


  it('should teste btnSalvar function', () => {
  component.formCadastro = formBuilder

  const response: Colaboradores = {id:1}
  mockColaboradoresService.uptadeColaborador.and.returnValue(of(response))

  // mockMessageService.add.and.returnValue()
  component.btnSalvar();
   
    expect(mockColaboradoresService.uptadeColaborador).toHaveBeenCalled()
    // expect(mockMessageService.add).toHaveBeenCalled()
  });
  

});

