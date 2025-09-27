import {
  newValorDefinidoFixoBI,
  ValorDefinidoFixoBI,
} from './valor-definido-fixo-bi';

export interface ReportParametrosBI {
  id?: number;
  descricao: string;
  chave: string;
  valorPadrao: string;
  obrigatorio: boolean;
  tabela?: string;
  posicao: number;
  tipoEntrada: 'PRIMITIVO' | 'TABELA' | 'DEFINIDOS';
  tipoPrimitivo?: 'INT' | 'STRING' | 'DATE';
  valoresFixos: Array<ValorDefinidoFixoBI>;
}
export function newReportParametrosBI(): ReportParametrosBI {
  return {
    chave: 'chave',
    descricao: 'teste',
    obrigatorio: true,
    posicao: 1,
    tabela: 'compra',
    tipoEntrada: 'TABELA',
    valorPadrao: '',
    valoresFixos: [newValorDefinidoFixoBI(), newValorDefinidoFixoBI()],
  };
}
