import { ModalImgComponent } from './../../../../ui-components/src/lib/modal-img/modal-img.component';
import { DemandsService } from './../services/demands.service';
import { AfterContentChecked, NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DemandsFormService } from '../services/demans.-from.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { Demands } from '../model/demands.model';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-demands-create',
  templateUrl: './demands-create.component.html',
  styleUrls: ['./demands-create.component.scss']

})

export class DemandsCreateComponent implements OnInit, AfterContentChecked {
  
  
  Calendar: CalendarModule;
  

  // Flags
  state: boolean = false;
  demandStep: number = 1;
  cleanForm: boolean = false;
  deleteAre: boolean = false;
  messageSuccessModal: boolean;

  display: boolean = false;
    
  validateSuccess: boolean = false;

  // Defining if page are creating or editing
  demandsById: Demands;
  currentAction: string;
  pageTitle: string;
  idDemands: number;

  // Form
  formDemand: FormGroup;
  demandsArray: any[];
  allocationArray: any[];
  listMappingForm: Object;
  

  // Upload
  uploadedFiles: any[] = [];

  bulletsContent: any[] = [
    {
      name: 'Dados da demanda',
      number: 1,
      bulletsControl: true
    },
    {
      name: 'Dados de alocação',
      number: 2,
      bulletsControl: false
    },
    {
      name: 'Resumo e conclusão',
      number: 3,
      bulletsControl: false
    }
  ];

  constructor(
    private form: FormBuilder,
    private demandsFormService: DemandsFormService,
    private demandsService: DemandsService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  
  ) { }

  ngOnInit(): void {
    this.setCurrentAction();
    this.createForm();
    this.loadDemands();

    this.populateDemandsDataArray();
    this.populateAllocationArray();

    this.route.params['id'];
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  setPageTitle(): string {
    let titlePath = this.route.snapshot.url[0].path;
    return titlePath;
  }

  setCurrentAction() {
    if (this.route.snapshot.url[0].path == 'create') {
      this.currentAction = 'create';
    } else {
      this.currentAction = 'edit';
    }
  }

  loadDemands() {
    if (this.currentAction == 'edit') {
      this.idDemands = +this.route.snapshot.paramMap.get('id');

      // this.demandsService.getDemandsById(this.idDemands).subscribe(
      //   response => {
      //     this.demandsById = response;
      //     // console.log(this.demandsById);
      //     this.mappingInputsDemands();
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // )
    }
  }

  mappingFormArray() {
    const add = this.formDemand.get('allocation_data') as FormArray;

    return this.demandsById.allocation_data.forEach(item => {
      add.push(this.form.group({
        checkbox: [false],
        are_mother: [item.are_mother, Validators.required],
        are_daughter: [item.are_daughter, Validators.required],
        profile: [item.profile, Validators.required],
        start_allocation: [new Date(item.start_allocation), Validators.required],
        end_allocation: [new Date(item.end_allocation), Validators.required],
        planned_hours: [item.planned_hours, Validators.required],
      }))
    });
  }

  mappingInputsDemands() {
    this.formDemand.patchValue({
      demands_data: {
        pre: this.demandsById.demands_data.pre,
        open_in: new Date(this.demandsById.demands_data.open_in),
        open_by: this.demandsById.demands_data.open_by,
        responsible: this.demandsById.demands_data.responsible,
        community: this.demandsById.demands_data.community,
        release_train: this.demandsById.demands_data.release_train,
        squad: this.demandsById.demands_data.squad,
        classification: this.demandsById.demands_data.classification,
        company: this.demandsById.demands_data.company,
        focal_point_outsourcing: this.demandsById.demands_data.focal_point_outsourcing,
        start_request: new Date(this.demandsById.demands_data.start_request),
        end_request: new Date(this.demandsById.demands_data.end_request),
        total_hours: this.demandsById.demands_data.total_hours,
        focal_point_everis: this.demandsById.demands_data.focal_point_everis,
        everis_leader: this.demandsById.demands_data.everis_leader,
        executive_to_bill: this.demandsById.demands_data.executive_to_bill,
        pre_description: this.demandsById.demands_data.pre_description,
      },
      allocation_data: this.mappingFormArray()
    })
  }

  createForm() {
    this.formDemand = this.form.group({
      demands_data: this.form.group({
        pre: ['', Validators.required],
        open_in: ['', Validators.required],
        open_by: ['', Validators.required],
        responsible: ['', Validators.required],
        community: ['', Validators.required],
        release_train: ['', Validators.required],
        squad: ['', Validators.required],
        classification: ['', Validators.required],
        company: ['', Validators.required],
        focal_point_outsourcing: ['', Validators.required],
        start_request: [null, Validators.required],
        end_request: [null, Validators.required],
        total_hours: ['', Validators.required],
        focal_point_everis: ['', Validators.required],
        everis_leader: ['', Validators.required],
        executive_to_bill: ['', Validators.required],
        pre_description: ['', Validators.required],
      }),
      allocation_data: this.form.array([this.createAllocationArray()])
    })
  }

  createAllocationArray(): FormGroup {
    return this.form.group({
      checkbox: [false],
      are_mother: ['', Validators.required],
      are_daughter: ['', Validators.required],
      profile: ['', Validators.required],
      start_allocation: [null, Validators.required],
      end_allocation: [null, Validators.required],
      planned_hours: ['', Validators.required],
    })
  }

  populateDemandsDataArray(): void {
    this.demandsArray = this.demandsFormService.demandsDataArray();
  }

  populateAllocationArray(): void {
    this.allocationArray = this.demandsFormService.allocationDataArray();
  }

  validatingForm(group: string, control: string): boolean {
    let validInput = this.formDemand.get(group)?.get(control)?.valid;
    let touchedInput = this.formDemand.get(group)?.get(control)?.touched;
    let validArray = (<FormArray>this.formDemand.get(group))?.controls[0]?.get(control)?.valid;
    let touchedArray = (<FormArray>this.formDemand.get(group))?.controls[0]?.get(control)?.touched;

    if (group === 'allocation_data') {
      return !validArray && touchedArray;
    }

    return !validInput && touchedInput;
  }

  validationStyle(group: string, control: string, type?: string): string {
    let validInput = this.formDemand.get(group)?.get(control)?.valid;
    let touchedInput = this.formDemand.get(group)?.get(control)?.touched;
    let validArray = (<FormArray>this.formDemand.get(group))?.controls[0]?.get(control)?.valid;
    let touchedArray = (<FormArray>this.formDemand.get(group))?.controls[0]?.get(control)?.touched;

    if (type === 'select') {
      return !validInput && touchedInput ? 'p-dropdown' : '';
    }

    if (type === 'calendar') {
      return !validInput && touchedInput ? 'p-calendar' : '';
    }

    if (group === 'allocation_data') {
      return !validArray && touchedArray ? 'border-color' : '';
    }

    if (group === 'allocation_data' && type === 'calendar') {
      return !validArray && touchedArray ? 'p-calendar' : '';
    }

    return !validInput && touchedInput ? 'border-color' : '';
  }

  callDialogCleanForm() {
    this.cleanForm = true;
  }

  callDialogDeleteAre() {
    this.deleteAre = true;
  }

  closeModal(): void {
    if (this.cleanForm) {
      this.cleanForm = false;
    } else {
      this.deleteAre = false;
    }
  }

  sendToRoute() { }

  getControls() {
    return (this.formDemand.get('allocation_data') as FormArray).controls;
  }

  showMessage(type: string, message: string): void {
    this.messageService.add({ severity: type, summary: message });
  }

  addNewAllocation() {
    const add = this.formDemand.get('allocation_data') as FormArray;
    add.push(this.createAllocationArray());
  }

  deleteNewAllocation() {
    let allocation = this.formDemand.get('allocation_data') as FormArray;

    allocation.controls.forEach((item, index) => {
      let result = item.value.checkbox
      if (result) {
        allocation.controls.splice(index, 1);
        this.deleteAre = false;
        this.showMessage('success', 'A ARE selecionada foi excluída com sucesso!');
      }
    })
  }

  cleanFormDemand() {
    this.formDemand.patchValue({
      demands_data: {
        pre: '',
        open_in: null,
        open_by: '',
        responsible: '',
        community: '',
        release_train: '',
        squad: '',
        classification: '',
        company: '',
        focal_point_outsourcing: '',
        start_request: null,
        end_request: null,
        total_hours: '',
        focal_point_everis: '',
        everis_leader: '',
        executive_to_bill: '',
        pre_description: '',
      }
    });
    this.cleanForm = false;
  }

  backToScreen() {
    switch (this.demandStep) {
      case 1:
        this.router.navigate(['./demands']);
        break;

      case 2:
        this.demandStep--;
        this.bulletsContent[1]['bulletsControl'] = false;
        break;

      case 3:
        this.demandStep--;
        this.bulletsContent[2]['bulletsControl'] = false;
        break;
    }
  }

  forwardToScreen() {
    this.demandStep++;

    switch (this.demandStep) {
      case 2:
        this.bulletsContent[1]['bulletsControl'] = true;
        break;

      case 3:
        this.bulletsContent[2]['bulletsControl'] = true;
        break;
    }
  }

  submitForm() {
    if (this.currentAction == 'create') {
      this.saveDemands();
    } else {
      this.updateDemands();
    }
  }

  saveDemands() {
    let demandsListObject = Object.assign({}, this.formDemand.value);

    let body = {
      "pre": this.formDemand.get('pre').value,
      "sobreNome": "sb teste",
      "cpf": "72345678229",
      "telefone": "11345678910",
      "data_Admissao": "2020-11-21T00:00:00",
      "matriz": "São Paulo",
      "tipo_Contratacao": "TeleTrabalho",
      "unidade_Negocio": "ITS&S",
      "tipo_Atuacao": "Staff",
      "sap": 65844,
      "racf": "hsilva",
      "funcional": 123344,
      "csr": 110,
      "logadouro": "Rua teste",
      "numero": "1111",
      "complemento": "teste",
      "bairro": "centro",
      "cidade": "São Paulo",
      "uf": "SP"
  }

  this.demandsService.saveDemands(body).subscribe((response) => {
    //response.status == 200 //Exibe modal de sucesso
    
  });


    // this.demandsService.saveDemands(demandsListObject).subscribe(
    //   () => {
    //     this.router.navigate(['./demands']);
    //     // this.messageService.add({ severity: 'custom', summary: 'Custom', detail: 'Message Content', icon: 'pi-file' });
    //   },
    //   (error) => { }
    // )
  }
  

  abrirImagem() {
    
    this.display = true;

   
    

    
    
  }

  updateDemands() {
    // let demandsListObject = Object.assign({}, this.formDemand.value);
    // this.demandsService.updateDemands(this.idDemands, demandsListObject).subscribe(
    //   () => {
    //     this.router.navigate(['./demands']);
    //     // this.messageService.add({ severity: 'custom', summary: 'Custom', detail: 'Message Content', icon: 'pi-file' });
    //   },
    //   (error) => { }
    // )
  }

}


