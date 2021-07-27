import { DemandsService } from './../../../../demands/src/lib/services/demands.service';
import { Component, Input, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
 
@Component({
  selector: 'everteam-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  apiContent: any;

  // Generic Table
  @Input() tableData: any[];

  constructor( private productService: DemandsService) { }

  ngOnInit(): void {

    // this.productService.getDemandas().then(data => this.tableData = data);
  }

//   customSort(event: SortEvent) {
//   //     event.data.sort((data1, data2) => {
//   //         let value1 = data1[event.field];
//   //         let value2 = data2[event.field];
//   //         let result = null;

//   //         if (value1 == null && value2 != null)
//   //             result = -1;
//   //         else if (value1 != null && value2 == null)
//   //             result = 1;
//   //         else if (value1 == null && value2 == null)
//   //             result = 0;
//   //         else if (typeof value1 === 'string' && typeof value2 === 'string')
//   //             result = value1.localeCompare(value2);
//   //         else
//   //             result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

//   //         return (event.order * result);
//   //     });
//   // }

}

