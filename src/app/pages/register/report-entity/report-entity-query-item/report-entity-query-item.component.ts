import { Component, Input, viewChild } from '@angular/core';
import { ModelImpComponent } from '../../../../components/model-imp/model-imp.component';
import { newQueryBI, QueryBI } from '../../../../models/query-bi';
import { ReportEntityQueryModeloComponent } from '../report-entity-query-modelo/report-entity-query-modelo.component';

@Component({
  selector: 'app-report-entity-query-item',
  imports: [ModelImpComponent, ReportEntityQueryModeloComponent],
  templateUrl: './report-entity-query-item.component.html',
  styleUrl: './report-entity-query-item.component.scss',
})
export class ReportEntityQueryItemComponent {
  @Input() query!: QueryBI;
  showChildrenn: boolean = false;

  modelQuery = viewChild.required<ModelImpComponent>('modelQuery');

  mostrarFilhos() {
    this.showChildrenn = !this.showChildrenn;
  }

  novoFilhoAction() {
    this.query.querysFilhas.push(newQueryBI());
  }

  carregarAction() {
    this.modelQuery().showModal();
  }

  closeModal() {
    this.modelQuery().fecharModal();
  }
}
