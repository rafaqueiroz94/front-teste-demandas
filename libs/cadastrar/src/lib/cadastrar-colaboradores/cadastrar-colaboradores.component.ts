import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from '../Services/cadastro.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'cadastro-component-component',
  templateUrl: './cadastrar-colaboradores.component.html',
  styleUrls: ['./cadastrar-colaboradores.component.scss'],
  providers: [MessageService]
})
export class CadastrarColaboradoresComponent implements OnInit {

  Estado: string[];
  formCadastro: FormGroup;
  Matriz: string[];
  tp_contratacao: string[];
  un_negocio: string[];
  tp_atuacao: string[];
  cidade: string[];
  perfil: string[];
  service: any;
  successToast = false;

  constructor(private form: FormBuilder, 
    private cadastroService: CadastroService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService) {
      this.Estado = ["Estado", "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB",
     "PR", "PE", "PI", "RR", "RO", "RJ", "RN", "RS", "SC", "SP", "SE", "TO" ];

      this.Matriz = ["Matriz" ];

      this.tp_contratacao = ["Tipo de contratação" ];

      this.un_negocio = ["Unidade de negócio" ];

      this.tp_atuacao = ["Tipo de atuação" ];

      this.cidade = ["Cidade", "Santo André", "São Bernardo", "São Caetano" ];

      this.perfil = ["Perfil", "Front end", "Back end", "Full stack" ];

   }

  ngOnInit(): void {
    this.createForm();
    
  }

  // updateForm (colaboradores) {
  //   this.form.patchValue({
  //       id: colaboradores.id,
  //       nome: colaboradores.nome
  //   });
  // }


  btnCadastro () {
    alert("Usuário cadastrado")
    const body = this.mappingForm(); 
    if (this.formCadastro.valid) {
      this.cadastroService.createColaboradores(body).subscribe({
        next:(response)=>{
          this.messageService.add({ severity: 'success', summary: 'Cadastro concluído com sucesso.', life: 2000 });
        },
        error:(error)=>{
          console.log('erro', error)
        }
      });
      this.router.navigate(['/colaboradores'], { state: { data: { teste: this.successToast } } });
    }
    else {
      console.log("Formulário válido", this.formCadastro.value);
    } 
    
    this.formCadastro.reset();
  }


  createForm(): void {
    
    this.formCadastro = this.form.group({
      sap: ['', [Validators.required]],
      nome: ['',[Validators.required]],
      sobrenome: ['', [Validators.required]],
      CPF: ['', [Validators.required]],
      nome_projeto: ['', [Validators.required]],
      EXT_projeto: ['', [Validators.required]],
      status: [''],
      telefone: ['',[Validators.required]],
      dt_admissao: ['',[Validators.required]],
      matriz: [''],
      tp_contratacao: [''],
      un_negocio: [''],
      tp_atuacao: [''],
      RACF: ['',[Validators.required]],
      funcional: ['',[Validators.required]],
      CSR: [''],
      logadouro: ['',[Validators.required]],
      numero: ['',[Validators.required]],
      complemento: [''],
      bairro: ['',[Validators.required]],
      cidade: [''],
      UF: [''],
      perfil: [''],
      nome_lider: ['',[Validators.required]],
      sobrenome_lider: ['',[Validators.required]],
      PRE: ['',[Validators.required]],
      ARE: ['',[Validators.required]],

      
    })
  };

  mappingForm() {
    return {
      sap: this.formCadastro.get('sap').value,
      nome: this.formCadastro.get('nome').value,
      sobrenome: this.formCadastro.get('sobrenome').value,
      CPF: this.formCadastro.get('CPF').value,
      nome_projeto: this.formCadastro.get('nome_projeto').value,
      EXT_projeto: this.formCadastro.get('EXT_projeto').value,
      status: this.formCadastro.get('status').value,
      telefone: this.formCadastro.get('telefone').value,
      dt_admissao: this.formCadastro.get('dt_admissao').value,
      matriz: this.formCadastro.get('matriz').value,
      tp_contratacao: this.formCadastro.get('tp_contratacao').value,
      un_negocio: this.formCadastro.get('un_negocio').value,
      tp_atuacao: this.formCadastro.get('tp_atuacao').value,
      RACF: this.formCadastro.get('RACF').value,
      funcional: this.formCadastro.get('funcional').value,
      CSR: this.formCadastro.get('CSR').value,
      logadouro: this.formCadastro.get('logadouro').value,
      numero: this.formCadastro.get('numero').value,
      complemento: this.formCadastro.get('complemento').value,
      bairro: this.formCadastro.get('bairro').value,
      cidade: this.formCadastro.get('cidade').value,
      UF: this.formCadastro.get('UF').value,
      perfil: this.formCadastro.get('perfil').value,
      nome_lider: this.formCadastro.get('nome_lider').value,
      sobrenome_lider: this.formCadastro.get('sobrenome_lider').value,
      PRE: this.formCadastro.get('PRE').value,
      ARE: this.formCadastro.get('ARE').value
    }
  }

}
