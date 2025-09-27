import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ColumnTable } from '../column-table.model';
@Component({
  selector: 'table-1',
  templateUrl: './table1.component.html',
  styleUrl: './table1.component.scss',
  imports: [
    TableModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    PaginatorModule,
  ],
})
export class Table1Component {
  @Input() colunas: ColumnTable[] = [];
  @Input() data: any = [];
  @Input() totalRecords: number = 0;
  @Output() eventPage = new EventEmitter();
  first1: number = 0;
  rows1: number = 5;
  constructor() {}

  changePage(e: any) {
    this.eventPage.emit(e);
  }
}
