import { Component, Input, viewChild } from '@angular/core';
import { ColumnTable } from '../../../../components/table/column-table.model';
import {
  newValorDefinidoFixoBI,
  ValorDefinidoFixoBI,
} from '../../../../models/valor-definido-fixo-bi';
import { Table2Component } from '../../../../components/table/table2/table2.component';
import { ModelImpComponent } from '../../../../components/model-imp/model-imp.component';
import { BuildService } from '../../../../services/infra/build.service';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextComponent } from '../../../../components/input-text/input-text.component';

@Component({
  selector: 'app-report-valores-fixos',
  imports: [
    Table2Component,
    ModelImpComponent,
    InputTextComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './report-valores-fixos.component.html',
  styleUrl: './report-valores-fixos.component.scss',
})
export class ReportValoresFixosComponent {
  @Input() valoresDefinidos!: Array<ValorDefinidoFixoBI>;
  modelValores = viewChild.required<ModelImpComponent>('modelValores');
  form!: FormGroup;
  id: string = 'detalhe-valores';
  itemSelecionado!: ValorDefinidoFixoBI;

  constructor(private build: BuildService) {}

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

  openModal(item: any) {
    this.itemSelecionado = item;
    this.populateForm(item);
    this.modelValores().showModal();
  }

  populateForm = async (ob: ValorDefinidoFixoBI) => {
    this.form = this.build.getFormBuilder().group({
      id: [ob.id],
      descricao: [ob.descricao, [Validators.required]],
      valor: [ob.valor, [Validators.required]],
    });
  };

  save() {
    const valor = this.form.value as ValorDefinidoFixoBI;

    const valido: boolean = this.validarValor(valor);
    if (!valido) {
      return;
    }

    const itemExistente = this.valoresDefinidos.find(
      (v) => v === this.itemSelecionado
    );
    Object.assign(this.itemSelecionado, valor);
    if (!itemExistente) {
      this.valoresDefinidos.push(this.itemSelecionado);
    }
    this.modelValores().fecharModal();
  }
  validarValor(valor: ValorDefinidoFixoBI): boolean {
    if (!valor.descricao || valor.descricao.trim().length === 0) {
      alert('A descrição é obrigatória.');
      return false;
    }
    if (!valor.valor || valor.valor.trim().length === 0) {
      alert('O valor é obrigatório.');
      return false;
    }
    return true;
  }

  newValordefinido() {
    this.itemSelecionado = newValorDefinidoFixoBI();
    this.populateForm(this.itemSelecionado);
    this.modelValores().showModal();
  }
}
