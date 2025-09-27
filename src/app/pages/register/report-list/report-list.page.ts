import { Component, OnInit } from '@angular/core';
import {
  ColumnTable,
  ParamPage,
} from '../../../components/table/column-table.model';
import { ReportApiService } from '../../../services/api/report-api.service';
import { ModelImpComponent } from '../../../components/model-imp/model-imp.component';
import { Table1Component } from '../../../components/table/table1/table1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuildService } from '../../../services/infra/build.service';
import { ReportEntityPage } from '../report-entity/report-entity.page';

@Component({
  selector: 'app-report-list',
  imports: [
    Table1Component,
    ModelImpComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './report-list.page.html',
  styleUrl: './report-list.page.scss',
})
export class ReportListPage implements OnInit {
  public static TITLE: string = 'Lista relatórios';
  public static ROTE: string = 'report-list-register';

  listaCliente: any;
  totalRecords = 1;

  nomeFilter: string = '';

  //modelCliente = viewChild.required<ModelImpComponent>('modelCliente');

  //frameCliente = viewChild.required<any>('frameCliente');

  page: ParamPage = {
    page: 0,
    rows: 5,
  };

  colunas: ColumnTable[] = [
    {
      type: 'txt',
      title: 'Nome',
      alignment: 'left',
      attribute: 'nome',
    },
    {
      alignment: 'left',
      title: 'Documento',
      type: 'txt',
      attribute: 'documento',
      pp: 'cpfCnpj',
    },
    {
      alignment: 'center',
      title: 'Carregar',
      type: 'btn',
      attribute: 'documento',
      iconBtn: 'pi pi-eye',
      colorBtn: '#0eabe3',
    },
  ];
  constructor(
    private serviceApi: ReportApiService,
    private build: BuildService
  ) {}
  ngOnInit(): void {
    this.find();
  }

  find() {
    this.serviceApi.getAll().subscribe((data) => {
      console.log(data);
      // this.frameCliente().populate(data.body);
      //this.modelCliente().showModal();
    });
  }

  goToNewReportAction() {
    this.build.getRouteService().nav(ReportEntityPage.ROTE);
    // this.frameCliente().populate(instaceCliente());
    // this.modelCliente().showModal();
  }

  onEnterFilter() {
    console.log('enter filter');
  }

  eventPage(data: any) {
    console.log(data);
  }
}
