import { Component, Input, viewChild } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AutocompleteComponent } from '../../../../components/auto-complete/auto-complete.component';
import { InputTextComponent } from '../../../../components/input-text/input-text.component';
import { ModelImpComponent } from '../../../../components/model-imp/model-imp.component';
import { ColumnTable } from '../../../../components/table/column-table.model';
import { Table2Component } from '../../../../components/table/table2/table2.component';
import { TipoEntradaBIEnum } from '../../../../constants/tipo-entrada-bi';
import { TipoPrimitivoParametroBIEnum } from '../../../../constants/tipo-primitivo-parametro-bi';
import {
  newReportParametrosBI,
  ReportParametrosBI,
} from '../../../../models/report-parametros-bi';
import { ValorDefinidoFixoBI } from '../../../../models/valor-definido-fixo-bi';
import { BuildService } from '../../../../services/infra/build.service';
import { ReportValoresFixosComponent } from '../report-valores-fixos/report-valores-fixos.component';
import { ICONS } from '../../../../core/constants/icons.const';
import { CORES } from '../../../../core/constants/cores.const';
import { InputCheckComponent } from '../../../../components/input-check/input-check.component';

@Component({
  selector: 'app-report-entity-parametros',
  imports: [
    Table2Component,
    ModelImpComponent,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    AutocompleteComponent,
    ReportValoresFixosComponent,
    InputCheckComponent,
  ],
  templateUrl: './report-entity-parametros.component.html',
  styleUrl: './report-entity-parametros.component.scss',
})
export class ReportEntityParametrosComponent {
  @Input() dataPametros!: Array<ReportParametrosBI>;
  valoresDefinidos: Array<ValorDefinidoFixoBI> = [];
  id: string = 'detalhe-report';
  itemSelecionado!: ReportParametrosBI;
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
      type: 'txt',
      title: 'Chave',
      alignment: 'left',
      attribute: 'chave',
    },
    {
      alignment: 'left',
      title: 'Tipo',
      type: 'txt',
      attribute: 'tipoEntrada',
    },
    {
      alignment: 'center',
      title: 'Carregar',
      type: 'btn',
      iconBtn: ICONS.VIEW,
      colorBtn: CORES.VIEW,
      actionBtn: (e) => this.openModal(e),
    },
    {
      alignment: 'center',
      title: 'Remover',
      type: 'btn',
      iconBtn: ICONS.TRASH,
      colorBtn: CORES.TRASH,
      actionBtn: (e) => this.remove(e),
    },
  ];

  openModal(item: ReportParametrosBI) {
    this.itemSelecionado = item;
    this.populateForm(item);
    this.modalParametro().showModal();
  }

  remove(e: any): void | undefined {
    const index = this.dataPametros.findIndex((v) => v === e);
    if (index === -1) {
      return;
    }
    this.dataPametros.splice(index, 1);
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
      tabelaColunaValor: ob.tabelaColunaValor,
      tabelaColunaLabel: ob.tabelaColunaLabel,
      tipoEntrada: ob.tipoEntrada,
      valorPadrao: ob.valorPadrao,
      obrigatorio: [ob.obrigatorio],
      tipoPrimitivo: ob.tipoPrimitivo,
    });
  };

  receberValorTipoEntrada($event: any) {
    this.tipoEntradaSelecionado = $event;
  }

  save() {
    const valor = this.form.value as ReportParametrosBI;
    valor.valoresFixos = this.valoresDefinidos;
    const valido: boolean = this.validarParametro(valor);
    if (!valido) {
      return;
    }

    const itemExistente = this.dataPametros.find(
      (v) => v === this.itemSelecionado
    );
    Object.assign(this.itemSelecionado, valor);
    if (!itemExistente) {
      this.dataPametros.push(this.itemSelecionado);
    }
    this.modalParametro().fecharModal();
  }

  newReportParametrosBI() {
    this.itemSelecionado = newReportParametrosBI();
    this.populateForm(this.itemSelecionado);
    this.modalParametro().showModal();
  }

  validarParametro(valor: ReportParametrosBI): boolean {
    if (!valor.descricao || valor.descricao.length < 3) {
      this.build
        .getToastService()
        .warn('Descrição é obrigatória e deve ter no mínimo 3 caracteres.');
      return false;
    }
    if (!valor.chave || valor.chave.length < 3) {
      this.build
        .getToastService()
        .warn('Chave é obrigatória e deve ter no mínimo 3 caracteres.');
      return false;
    }
    if (!valor.valorPadrao) {
      this.build.getToastService().warn('Valor Padrão é Obrigatório.');
      return false;
    }
    if (!valor.tipoEntrada) {
      this.build.getToastService().warn('Tipo Entrada é Obrigatória.');
      return false;
    }
    if (valor.tipoEntrada === TipoEntradaBIEnum.TABELA && !valor.tabela) {
      this.build.getToastService().warn('Tabela é Obrigatória.');
      return false;
    }
    if (
      valor.tipoEntrada === TipoEntradaBIEnum.PRIMITIVO &&
      !valor.tipoPrimitivo
    ) {
      this.build.getToastService().warn('Tipo Primitivo é Obrigatório.');
      return false;
    }
    if (
      valor.tipoEntrada === TipoEntradaBIEnum.DEFINIDOS &&
      (!valor.valoresFixos || valor.valoresFixos.length === 0)
    ) {
      this.build
        .getToastService()
        .warn('Deve ser informado ao menos um valor definido.');
      return false;
    }
    return true;
  }

  removerValorDefinido($event: ValorDefinidoFixoBI) {
    const index = this.valoresDefinidos.findIndex((v) => v === $event);
    if (index === -1) {
      return;
    }
    this.valoresDefinidos.splice(index, 1);
  }
}
