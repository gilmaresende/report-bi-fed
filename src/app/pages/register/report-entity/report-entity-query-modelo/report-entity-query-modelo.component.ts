import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputAreaComponent } from '../../../../components/input-area/input-area.component';
import { InputTextComponent } from '../../../../components/input-text/input-text.component';
import { ColumnTable } from '../../../../components/table/column-table.model';
import { QueryBI } from '../../../../models/query-bi';
import { BuildService } from '../../../../services/infra/build.service';

@Component({
  selector: 'app-report-entity-query-modelo',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    InputAreaComponent,
  ],
  templateUrl: './report-entity-query-modelo.component.html',
  styleUrl: './report-entity-query-modelo.component.scss',
})
export class ReportEntityQueryModeloComponent implements OnInit {
  id: string = 'detalhe-query';
  @Input() query!: QueryBI;
  querysFilhas: Array<QueryBI> = [];
  form!: FormGroup;
  @Output() eventCloseModal = new EventEmitter();

  @Input() su?: ReportEntityQueryModeloComponent;
  constructor(private build: BuildService) {}
  async ngOnInit() {
    await this.populateForm(this.query);
  }

  populateForm = async (ob: QueryBI) => {
    this.querysFilhas = ob.querysFilhas;
    this.form = this.build.getFormBuilder().group({
      id: [ob.id],
      descricao: [ob.descricao, [Validators.required, Validators.min(3)]],
      chave: [ob.chave, [Validators.required, Validators.min(3)]],
      principal: [ob.principal],
      queryStr: [ob.queryStr, [Validators.required, Validators.min(3)]],
      conteudoJasper: [ob.conteudoJasper],
    });
  };

  colunasQuerysFilhas: ColumnTable[] = [
    {
      type: 'txt',
      title: 'Descrição',
      alignment: 'left',
      attribute: 'descricao',
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

  save() {
    const valor = this.form.value as QueryBI;

    const valido: boolean = this.validarQuery(valor);
    if (!valido) {
      return;
    }
    Object.assign(this.query, valor);
    this.eventCloseModal.emit();
  }
  validarQuery(valor: QueryBI): boolean {
    if (valor.descricao.length < 3) {
      this.build
        .getToastService()
        .warn('Descrição deve ter no mínimo 3 caracteres');
      return false;
    }
    if (valor.chave.length < 3) {
      this.build
        .getToastService()
        .warn('Chave deve ter no mínimo 3 caracteres');
      return false;
    }
    if (valor.queryStr.length < 3) {
      this.build
        .getToastService()
        .warn('Query deve ter no mínimo 3 caracteres');
      return false;
    }
    console.log(valor);
    if (
      !valor.principal &&
      !valor.conteudoJasper ||
      (valor.conteudoJasper && valor.conteudoJasper.trim().length === 0)
    ) {
      this.build
        .getToastService()
        .warn('Query filha deve ter o conteúdo jasper preenchido');
      return false;
    }
    return true;
  }
}
