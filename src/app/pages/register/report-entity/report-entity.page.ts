import { Component } from '@angular/core';
import { TabComponent } from '../../../components/tab/tab.component';
import { TabHeaderComponent } from '../../../components/tab/tab-header/tab-header.component';
import { TabBodyComponent } from '../../../components/tab/tab-body/tab-body.component';
import { newReportBI, ReportBI } from '../../../models/report-bi';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BuildService } from '../../../services/infra/build.service';
import { ReportEntityDetalheComponent } from './report-entity-detalhe/report-entity-detalhe.component';
import { ReportEntityParametrosComponent } from './report-entity-parametros/report-entity-parametros.component';
import { ReportParametrosBI } from '../../../models/report-parametros-bi';

@Component({
  selector: 'app-report-entity',
  imports: [
    TabComponent,
    TabHeaderComponent,
    TabBodyComponent,
    FormsModule,
    ReactiveFormsModule,
    ReportEntityDetalheComponent,
    ReportEntityParametrosComponent,
  ],
  templateUrl: './report-entity.page.html',
  styleUrl: './report-entity.page.scss',
})
export class ReportEntityPage {
  public static ROTE: string = 'report-entity-register';
  static TITLE: string = 'Registro Report';
  form!: FormGroup;
  dataPametros: Array<ReportParametrosBI> = [];

  constructor(private build: BuildService) {
    this.populateForm(newReportBI());
  }

  populateForm = async (ob: ReportBI) => {
    this.dataPametros = ob.parametros;
    this.form = this.build.getFormBuilder().group({
      id: [ob.id],
      descricao: [ob.descricao, [Validators.required, Validators.min(3)]],
      ativo: [ob.ativo],
    });
  };
}
