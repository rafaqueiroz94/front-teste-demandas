import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'everteam-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebar: any[] = [];
  styleActive: string = 'active';

  btnToggle: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.btnToggle= !this.btnToggle
    const width = window.innerWidth;
    this.btnToggle = width > 600;
  }

  constructor() { }

  ngOnInit(): void {
   
  }

 
}
