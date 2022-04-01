import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { TableButtonAction } from '../../models/tableButtonAction';
import  { TableColumn}  from '../../models/tableColumn';

@Component({
  selector: 'app-mat-custom-table',
  templateUrl: './mat-custom-table.component.html',
  styleUrls: ['./mat-custom-table.component.css'],
})
export class MatCustomTableComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator  ;
  @Output() action: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>()
  @Input() columns: Array<TableColumn> | undefined;
  @Input() dataset: Array<any> = [];
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;
  dataSource: MatTableDataSource<any> | undefined;
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [];
  value: string | undefined;
  constructor() { }


  ngOnInit() {
    // set checkbox column
    this.displayedColumns.push("select");

    // set table columns
    if(this.columns ){
      this.displayedColumns = this.displayedColumns.concat(this.columns.map(x => x.columnDef));    // pre-fix static
    }
    

    // add action column
    this.displayedColumns.push("action");
    this.dataSource = new MatTableDataSource<any>(this.dataset);

    // set pagination
    if(this.paginator)
    {
      this.dataSource.paginator = this.paginator;
    }    
  }

  onTableAction(e: TableButtonAction): void {
    this.action.emit(e)
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    let numRows = 0;
    if(this.dataSource)
      numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    //this.isAllSelected() ?  this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }
  ngAfterViewInit() {
    if(this.sort && this.dataSource)
      this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if(this.sort && this.dataSource)
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}


