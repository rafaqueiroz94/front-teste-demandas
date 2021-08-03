import { Component, OnInit } from '@angular/core';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.component.html',
  styleUrls: ['./modal-img.component.scss']
})
export class ModalImgComponent implements OnInit {

  constructor() { 
    DialogModule
  }

  ngOnInit() {

  }

  abrirImg(){
    
  }

}
