import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'everteam-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {
  @Input() message: string;
  @Input() messageSuccessModal: boolean;

  @Output() buttonLogic = new EventEmitter();
  @Output() closeModal = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onClickButton() {
    this.buttonLogic.emit();
  }

  clickEvent() {
    this.closeModal.emit();
  }
}