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
import { ReportBI } from '../../../models/report-bi';
import { ReportPlayComponent } from '../../report-play/report-play.component';

@Component({
  selector: 'app-report-list',
  imports: [Table1Component, FormsModule, ReactiveFormsModule],
  templateUrl: './report-list.page.html',
  styleUrl: './report-list.page.scss',
})
export class ReportListPage implements OnInit {
  public static TITLE: string = 'Lista relatórios';
  public static ROTE: string = 'report-list-register';

  listaReports: Array<any> = [];
  totalRecords = 1;

  nomeFilter: string = '';

  page: ParamPage = {
    page: 0,
    rows: 5,
  };

  colunas: ColumnTable[] = [
    {
      type: 'txt',
      title: 'Descrição',
      alignment: 'left',
      attribute: 'descricao',
    },
    {
      alignment: 'center',
      title: 'Executar',
      type: 'btn',
      iconBtn: 'pi pi-play',
      colorBtn: '#0ee379ff',
      actionBtn: (e) => this.goToPlayAction(e),
    },
    {
      alignment: 'center',
      title: 'Carregar',
      type: 'btn',
      iconBtn: 'pi pi-eye',
      colorBtn: '#0eabe3',
      actionBtn: (e) => this.goToReportAction(e),
    },
    {
      alignment: 'center',
      title: 'Remover',
      type: 'btn',
      iconBtn: 'pi pi-trash',
      colorBtn: '#e31c0eff',
      actionBtn: (e) => this.removeReportAction(e),
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
      this.listaReports = data.body || [];
      this.totalRecords = this.listaReports.length;
    });
  }

  removeReportAction(e: ReportBI): void | undefined {
    this.serviceApi.remove(e.id!).subscribe((ret) => {
      this.build.getToastService().inf('Relatório removido');
      this.find();
    });
  }

  goToNewReportAction() {
    this.build.getRouteService().nav(ReportEntityPage.ROTE);
  }

  goToReportAction(e: any): void | undefined {
    this.build.getRouteService().nav(`${ReportEntityPage.ROTE}/${e.id}`);
  }

  goToPlayAction(e: any): void | undefined {
    this.build.getRouteService().nav(`${ReportPlayComponent.ROTE}/${e.id}`);
  }

  onEnterFilter() {
    console.log('enter filter');
  }

  eventPage(data: any) {
    console.log(data);
  }
}
