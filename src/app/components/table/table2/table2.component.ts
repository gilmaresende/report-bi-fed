import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnTable } from '../column-table.model';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'table2',
  imports: [FormsModule, ButtonModule, CommonModule],
  templateUrl: './table2.component.html',
  styleUrl: './table2.component.scss',
})
export class Table2Component {
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
