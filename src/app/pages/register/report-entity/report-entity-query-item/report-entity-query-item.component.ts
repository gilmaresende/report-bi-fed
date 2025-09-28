import {
  Component,
  EventEmitter,
  Input,
  Output,
  viewChild,
} from '@angular/core';
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
  removerFilho(filha: any) {
    console.log('removerFilho', filha);
    const index = this.query.querysFilhas.indexOf(filha);
    if (index > -1) {
      this.query.querysFilhas.splice(index, 1);
    }
  }
  @Input() query!: QueryBI;
  @Output() eventDelete = new EventEmitter();
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

  removerAction() {
    this.eventDelete.emit(this.query);
  }
}
