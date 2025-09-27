import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report-entity-parametros',
  imports: [],
  templateUrl: './report-entity-parametros.component.html',
  styleUrl: './report-entity-parametros.component.scss',
})
export class ReportEntityParametrosComponent {
  @Input() form!: FormGroup;
  id: string = 'detalhe-report';
}
