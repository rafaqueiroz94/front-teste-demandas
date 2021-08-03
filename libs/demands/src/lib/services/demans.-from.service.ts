import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DemandsFormService {
  demands_data: any[];
  allocation_data: any[];
  resume_data: any[];
  formDemand: FormGroup;
  demands_dt: any[];

  constructor() { }

  demandsDataArray(): any[] {
    return this.demands_data = [
      {
        label: 'PRE',
        tag: 'input',
        control: 'pre'
      },
      {},
      {},
      {
        label: 'Aberto em',
        tag: 'calendar',
        control: 'open_in'
      },
      {
        label: 'Aberto por',
        tag: 'input',
        control: 'open_by'
      },
      {
        label: 'Responsável',
        tag: 'input',
        control: 'responsible'
      },
      {
        label: 'Comunidade',
        tag: 'select',
        control: 'community',
        placeholder: 'Escolha uma opção',
        options: [
          { value: 'teste 1' },
          { value: 'teste 2' },
          { value: 'teste 3' },
        ]
      },
      {
        label: 'Release Train - RT',
        tag: 'input',
        control: 'release_train'
      },
      {
        label: 'Squad',
        tag: 'input',
        control: 'squad'
      },
      {
        label: 'Classificação',
        tag: 'select',
        control: 'classification',
        placeholder: 'Escolha uma opção',
        options: [
          { value: 'teste 1' },
          { value: 'teste 2' },
          { value: 'teste 3' },
        ]
      },
      {
        label: 'Empresa',
        tag: 'input',
        control: 'company'
      },
      {
        label: 'Ponto Focal Outsourcing',
        tag: 'input',
        control: 'focal_point_outsourcing'
      },
      {
        label: 'Início do Pedido',
        tag: 'calendar',
        control: 'start_request'
      },
      {
        label: 'Término do Pedido',
        tag: 'calendar',
        control: 'end_request'
      },
      {
        label: 'Total de Horas',
        tag: 'input',
        control: 'total_hours'
      },
      {
        label: 'Ponto Focal Everis',
        tag: 'input',
        control: 'focal_point_everis'
      },
      {
        label: 'Líder Everis',
        tag: 'input',
        control: 'everis_leader'
      },
      {
        label: 'Executivo a Faturar',
        tag: 'input',
        control: 'executive_to_bill'
      },
      {
        label: 'Descrição da PRE',
        tag: 'textarea',
        control: 'pre_description'
      },
    ]
    
    // return this.demands_dt = [
    //   {
    //     label: 'Descrição da PRE',
    //     tag: 'textarea',
    //     control: 'pre_description'  
    //   }
    // ]

    
  }

  allocationDataArray(): any[] {
    return this.allocation_data = [
      {
        label: 'ARE Mãe',
        tag: 'input',
        control: 'are_mother'
      },
      {
        label: 'ARE Filha',
        tag: 'input',
        control: 'are_daughter'
      },
      {
        label: 'Perfil',
        tag: 'input',
        control: 'profile'
      },
      {
        label: 'Início da Alocação',
        tag: 'calendar',
        control: 'start_allocation'
      },
      {
        label: 'Término da Alocação',
        tag: 'calendar',
        control: 'end_allocation'
      },
      {
        label: 'Horas Planejadas',
        tag: 'input',
        control: 'planned_hours'
      },
    ]
  }
}