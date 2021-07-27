import { Component, OnInit } from '@angular/core';
import { DemandsService } from '../services/demands.service';

@Component({
  selector: 'everteam-demands-list',
  templateUrl: './demands-list.component.html',
  styleUrls: ['./demands-list.component.scss']
})
export class DemandsListComponent implements OnInit {
  state: boolean = true;

  // Table
  tableData: any;
  
  constructor(private demandsService: DemandsService) { }

  ngOnInit(): void {
    this.populateDemands();
  }

  populateDemands() {
    this.tableData = this.demandsService.getDemandas();

   
  }

}
