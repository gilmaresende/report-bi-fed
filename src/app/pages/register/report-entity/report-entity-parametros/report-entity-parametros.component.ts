import { Component, Input, viewChild } from '@angular/core';
import { Table2Component } from '../../../../components/table/table2/table2.component';
import { ReportParametrosBI } from '../../../../models/report-parametros-bi';
import { ColumnTable } from '../../../../components/table/column-table.model';
import { ModelImpComponent } from '../../../../components/model-imp/model-imp.component';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BuildService } from '../../../../services/infra/build.service';
import { InputTextComponent } from '../../../../components/input-text/input-text.component';
import { TabComponent } from '../../../../components/tab/tab.component';
import { TabHeaderComponent } from '../../../../components/tab/tab-header/tab-header.component';
import { TabBodyComponent } from '../../../../components/tab/tab-body/tab-body.component';
import { AutocompleteComponent } from '../../../../components/auto-complete/auto-complete.component';
import { TipoEntradaBIEnum } from '../../../../constants/tipo-entrada-bi';
import { TipoPrimitivoParametroBIEnum } from '../../../../constants/tipo-primitivo-parametro-bi';
import { ValorDefinidoFixoBI } from '../../../../models/valor-definido-fixo-bi';

@Component({
  selector: 'app-report-entity-parametros',
  imports: [
    Table2Component,
    ModelImpComponent,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    AutocompleteComponent,
  ],
  templateUrl: './report-entity-parametros.component.html',
  styleUrl: './report-entity-parametros.component.scss',
})
export class ReportEntityParametrosComponent {
  @Input() dataPametros!: Array<ReportParametrosBI>;
  valoresDefinidos: Array<ValorDefinidoFixoBI> = [];
  id: string = 'detalhe-report';

  tipoEntradaSelecionado!: string;
  tipoPrimitivo = TipoEntradaBIEnum.PRIMITIVO;
  tipoTabela = TipoEntradaBIEnum.TABELA;
  tipoDefinido = TipoEntradaBIEnum.DEFINIDOS;

  modalParametro = viewChild.required<ModelImpComponent>('modelParametro');

  constructor(private build: BuildService) {}

  form!: FormGroup;

  listDataTiposEntrada = [
    { label: 'Primitivo', value: TipoEntradaBIEnum.PRIMITIVO },
    { label: 'Tabela', value: TipoEntradaBIEnum.TABELA },
    { label: 'Definidos', value: TipoEntradaBIEnum.DEFINIDOS },
  ];

  listDataTiposPrimitico = [
    { label: 'Inteiro', value: TipoPrimitivoParametroBIEnum.INT },
    { label: 'String', value: TipoPrimitivoParametroBIEnum.STRING },
    { label: 'Data', value: TipoPrimitivoParametroBIEnum.DATE },
  ];

  colunasParametros: ColumnTable[] = [
    {
      type: 'txt',
      title: 'Descrição',
      alignment: 'left',
      attribute: 'descricao',
    },
    {
      alignment: 'left',
      title: 'Primitivo',
      type: 'txt',
      attribute: 'tipoEntrada',
    },
    {
      alignment: 'center',
      title: 'Carregar',
      type: 'btn',
      attribute: 'documento',
      iconBtn: 'pi pi-eye',
      colorBtn: '#0eabe3',
      actionBtn: (e) => this.openModal(e),
    },
  ];

  colunasValoresFixos: ColumnTable[] = [
    {
      type: 'txt',
      title: 'Descrição',
      alignment: 'left',
      attribute: 'descricao',
    },
    {
      alignment: 'left',
      title: 'Valor',
      type: 'txt',
      attribute: 'valor',
    },
    {
      alignment: 'center',
      title: 'Carregar',
      type: 'btn',
      attribute: 'documento',
      iconBtn: 'pi pi-eye',
      colorBtn: '#0eabe3',
      actionBtn: (e) => this.openModal(e),
    },
  ];

  openModal(item: ReportParametrosBI) {
    this.populateForm(item);
    this.modalParametro().showModal();
  }

  populateForm = async (ob: ReportParametrosBI) => {
    this.valoresDefinidos = ob.valoresFixos;
    this.tipoEntradaSelecionado = ob.tipoEntrada;
    this.form = this.build.getFormBuilder().group({
      id: [ob.id],
      descricao: [ob.descricao, [Validators.required, Validators.min(3)]],
      chave: [ob.chave, [Validators.required, Validators.min(3)]],
      posicao: ob.posicao,
      tabela: ob.tabela,
      tipoEntrada: ob.tipoEntrada,
      valorPadrao: ob.valorPadrao,
      tipoPrimitivo: ob.tipoPrimitivo,
    });
  };

  receberValorTipoEntrada($event: any) {
    this.tipoEntradaSelecionado = $event;
  }
}
