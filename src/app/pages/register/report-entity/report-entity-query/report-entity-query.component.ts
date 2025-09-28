import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueryBI } from '../../../../models/query-bi';
import { ReportEntityQueryItemComponent } from '../report-entity-query-item/report-entity-query-item.component';

@Component({
  selector: 'app-report-entity-query',
  imports: [FormsModule, ReactiveFormsModule, ReportEntityQueryItemComponent],
  templateUrl: './report-entity-query.component.html',
  styleUrl: './report-entity-query.component.scss',
})
export class ReportEntityQueryComponent {
  id: string = 'detalhe-query';
  @Input() query!: QueryBI;
}
