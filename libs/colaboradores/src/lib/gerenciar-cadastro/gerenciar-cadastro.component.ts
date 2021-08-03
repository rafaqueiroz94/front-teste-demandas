import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaboradores } from '../models/colaboradores';
import { ColaboradoresService } from '../services/colaboradores.service';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'gerenciar-cadastro-component',
  templateUrl: './gerenciar-cadastro.component.html',
  styleUrls: ['./gerenciar-cadastro.component.scss'],
  providers: [MessageService]
})
export class GerenciarCadastroComponent implements OnInit {
  colaboradores:any;
  getColaboradores = [];
  first = 0;
  formCadastro: FormGroup;
  rows = 10;

  remove = null;

  Estado: string[];
  Matriz: string[];
  tp_contratacao: string[];
  un_negocio: string[];
  tp_atuacao: string[];
  cidade: string[];
  perfil: string[];

  idcolaborador;

  // dentro do constructor = private form: FormBuilder, 
  // private cadastroService: CadastroService
  
  constructor(private colaboradoresService: ColaboradoresService,
    private route: ActivatedRoute, private form: FormBuilder,
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

   //fazer a chamada ao service de storage (getColaborador().subscribe( info => form.patch(info))

  ngOnInit(): void { 
    //this.createForm();
    //console.log(this.idcolaborador);
    this.buscarColaborador();
  }
  
  buscarColaborador () {
    this.idcolaborador = this.route.snapshot.paramMap.get('id');
    this.colaboradoresService.getColaboradoresId(this.idcolaborador).subscribe(resultado => {
      this.colaboradores = resultado; 
      this.createForm();
      console.log("teste funcionando", this.colaboradores);
    });  


    /*this.formCadastro = new FormGroup({
      nome: new FormControl(),
      sobrenome: new FormControl(),
      CPF: new FormControl()
   });*/
  }

  //debugar a service
  //mesma condição if de cadastro
  btnSalvar () {
    if (this.formCadastro.valid) {
      const colaboradores = this.mappingForm(); 
      this.colaboradoresService.uptadeColaborador(this.idcolaborador, colaboradores).subscribe( resultado => {
        console.log(resultado);
      });
      
      alert("Usuário cadastrado")
      console.log("Formulário válido", this.colaboradores);
      this.formCadastro.reset();
      this.router.navigate(['/colaboradores']);
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Alterações salvas com sucesso', life: 2000});
      return;
    }
    else{
      alert('Por favor preencher todos os campos...')
    }


    
    // const formulario = this.mappingForm(); 
    // if (this.formCadastro.valid) {
    //   this.colaboradoresService.uptadeColaborador(this.idcolaborador, formulario).subscribe(resultado =>{
    //     console.log(resultado);
    //   });
    //   console.log("Formulário inválido");
    //   return;
    // }
    // console.log("Formulário válido", this.formCadastro.value);
    // this.router.navigate(['/colaboradores']);



    // alert("esta funcionando salvar")
    // const formulario = this.mappingForm();
    // this.colaboradoresService.uptadeColaborador(this.idcolaborador, this.idcolaborador).subscribe(resultado => {
    //   console.log(resultado)
    //   this.formCadastro.reset();
    //   this.router.navigate(['/colaboradores']);
    // })
  }



  createForm(): void {
    //SAP: [this.formCadastro.get('SAP').value, [Validators.required]],
    this.formCadastro = this.form.group({
      sap: new FormControl(this.colaboradores.sap, Validators.required),
      nome: new FormControl(this.colaboradores.nome, Validators.required),
      // nome: ['nome',[Validators.required]],
      sobrenome: new FormControl(this.colaboradores.sobrenome),
      CPF: new FormControl(this.colaboradores.CPF),
      nome_projeto: new FormControl(this.colaboradores.nome_projeto, Validators.required),
      EXT_projeto: new FormControl(this.colaboradores.EXT_projeto, Validators.required),
      status: new FormControl(this.colaboradores.status),
      telefone: new FormControl(this.colaboradores.telefone, Validators.required),
      dt_admissao: new FormControl(this.colaboradores.dt_admissao, Validators.required),
      matriz: new FormControl(this.colaboradores.matriz),
      tp_contratacao: new FormControl(this.colaboradores.tp_contratacao),
      un_negocio: new FormControl(this.colaboradores.un_negocio),
      tp_atuacao: new FormControl(this.colaboradores.tp_atuacao),
      RACF: new FormControl(this.colaboradores.RACF, Validators.required),
      funcional: new FormControl(this.colaboradores.funcional, Validators.required),
      CSR: new FormControl(this.colaboradores.CSR),
      logadouro: new FormControl(this.colaboradores.logadouro, Validators.required),
      numero: new FormControl(this.colaboradores.numero, Validators.required),
      complemento: new FormControl(this.colaboradores.complemento),
      bairro: new FormControl(this.colaboradores.bairro, Validators.required),
      cidade: new FormControl(this.colaboradores.cidade),
      UF: new FormControl(this.colaboradores.UF),
      perfil: new FormControl(this.colaboradores.perfil),
      nome_lider: new FormControl(this.colaboradores.nome_lider, Validators.required),
      sobrenome_lider: new FormControl(this.colaboradores.sobrenome_lider, Validators.required),
      PRE: new FormControl(this.colaboradores.PRE),
      ARE: new FormControl(this.colaboradores.ARE),
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
