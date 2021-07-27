import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  
  selector: 'everteam-header',
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.scss'],
    
  

})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() button: string;

  

  @Input() show: boolean;
  
  @Output() clickEvent = new EventEmitter();


  hideAndShow: boolean = false;
  counterBadge: any[] = [
   
  ];

  constructor() { }

  ngOnInit(): void {
    
  }
//   onClick() {
//     this.clickEvent.emit();
//   }

//   toggleNotification() {
//     this.hideAndShow = !this.hideAndShow;
// }
}
