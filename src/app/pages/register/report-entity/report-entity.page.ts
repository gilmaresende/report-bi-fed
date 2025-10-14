import { Component, viewChild } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ModelImpComponent } from '../../../components/model-imp/model-imp.component';
import { TabBodyComponent } from '../../../components/tab/tab-body/tab-body.component';
import { TabHeaderComponent } from '../../../components/tab/tab-header/tab-header.component';
import { TabComponent } from '../../../components/tab/tab.component';
import { QueryBI } from '../../../models/query-bi';
import { newReportBI, ReportBI } from '../../../models/report-bi';
import { ReportParametrosBI } from '../../../models/report-parametros-bi';
import { BuildService } from '../../../services/infra/build.service';
import { ReportEntityDetalheComponent } from './report-entity-detalhe/report-entity-detalhe.component';
import { ReportEntityParametrosComponent } from './report-entity-parametros/report-entity-parametros.component';
import { ReportEntityQueryComponent } from './report-entity-query/report-entity-query.component';
import { ReportApiService } from '../../../services/api/report-api.service';
import { ActivatedRoute } from '@angular/router';
import { getIdRote } from '../../../utils/rote-itils';

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
    ReportEntityQueryComponent,
  ],
  templateUrl: './report-entity.page.html',
  styleUrl: './report-entity.page.scss',
})
export class ReportEntityPage {
  public static ROTE: string = 'report-entity-register';
  static TITLE: string = 'Registro Report';
  form!: FormGroup;
  query!: QueryBI;
  dataPametros: Array<ReportParametrosBI> = [];
  modelQueryFilha = viewChild.required<ModelImpComponent>('modelQuery');

  constructor(
    private build: BuildService,
    private seriveReport: ReportApiService,
    private activatedRoutes: ActivatedRoute
  ) {
    const id = getIdRote(this.activatedRoutes);
    if (id) {
      this.seriveReport.getById(id).subscribe((ret) => {
        this.populateForm(ret.body);
      });
    } else this.populateForm(newReportBI());
  }

  populateForm = async (ob: ReportBI) => {
    this.dataPametros = ob.parametros;
    this.query = ob.query;
    this.form = this.build.getFormBuilder().group({
      id: [ob.id],
      descricao: [ob.descricao, [Validators.required, Validators.min(3)]],
      ativo: [ob.ativo],
    });
  };

  openModalQuery() {
    this.modelQueryFilha().showModal();
  }

  save() {
    const valor = this.form.value as ReportBI;
    Object.assign(valor, { query: this.query, parametros: this.dataPametros });
    this.seriveReport.save(valor).subscribe((ret) => {
      console.log('ret', ret);
    });
  }
}
