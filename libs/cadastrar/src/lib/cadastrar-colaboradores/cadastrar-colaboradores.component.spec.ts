import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CadastroService } from '../Services/cadastro.service';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CadastrarColaboradoresComponent } from './cadastrar-colaboradores.component';
import { of } from 'rxjs';
import { Colaboradores } from '../Services/cadastro';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


describe('CadastrarColaboradoresComponent', () => {
  let component: CadastrarColaboradoresComponent;
  let fixture: ComponentFixture<CadastrarColaboradoresComponent>;
  

let mockRouter = {
    navigate: jasmine.createSpy('navigate')
};

let mockCadastroService: jasmine.SpyObj<CadastroService>;
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
      mockCadastroService = jasmine.createSpyObj('CadastroService', ['getColaboradores', 'createColaboradores']);
      mockMessageService = jasmine.createSpyObj('MessageService', ['add']);
      

    await TestBed.configureTestingModule({
      declarations: [ CadastrarColaboradoresComponent ],
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
          { provide: CadastroService, useValue: mockCadastroService },
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
    fixture = TestBed.createComponent(CadastrarColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });




  it('should create', () => {
    expect(component).toBeTruthy();
    
  });


  it('should teste btnCadastro function', () => {
  component.formCadastro = formBuilder

  const response: Colaboradores = {id:3}
  mockCadastroService.createColaboradores.and.returnValue(of(response))

  component.btnCadastro();
   
    expect(mockCadastroService.createColaboradores).toHaveBeenCalled()
  });
  

});
