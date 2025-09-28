import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from '../../../../components/input-text/input-text.component';
import { InputCheckComponent } from "../../../../components/input-check/input-check.component";

@Component({
  selector: 'app-report-entity-detalhe',
  imports: [ReactiveFormsModule, FormsModule, InputTextComponent, InputCheckComponent],
  templateUrl: './report-entity-detalhe.component.html',
  styleUrl: './report-entity-detalhe.component.scss',
})
export class ReportEntityDetalheComponent {
  @Input() form!: FormGroup;
  id: string = 'detalhe-report';
}
