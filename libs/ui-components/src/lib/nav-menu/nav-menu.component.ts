import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'everteam-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  activedMenuHome = "";
  activedMenuOportunidades = "";
  activedMenuVagas = "";
  activedMenuModulos = "";
  activedMenuFuncoes = "";
  controlerMenuHome = 0;
  controlerMenuOportunidades = 0;
  controlerMenuVagas = 0;
  constructor() { }

  ngOnInit(): void {
  }

  activeMenuHome(){
    if(this.controlerMenuHome === 0){
      this.activedMenuHome = "activeMenu"
      this.controlerMenuHome = 1;
    }else{
      this.activedMenuHome = " "
      this.controlerMenuHome = 0;
    }
  }
  activeMenuOportunidades(){
    if(this.controlerMenuOportunidades === 0){
      this.activedMenuOportunidades = "activeMenu"
      this.controlerMenuOportunidades = 1;
    }else{
      this.activedMenuOportunidades = " "
      this.controlerMenuOportunidades = 0;
    }
  }
  activeMenuVagas(){
    if(this.controlerMenuVagas === 0){
      this.activedMenuVagas = "activeMenu"
      this.controlerMenuVagas = 1;
    }else{
      this.activedMenuVagas = " "
      this.controlerMenuVagas = 0;
    }
  }
  toggle(){
    console.log();
    return this
  }
}
