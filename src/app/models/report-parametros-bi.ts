import { ValorDefinidoFixoBI } from './valor-definido-fixo-bi';

export interface ReportParametrosBI {
  id?: number;
  descricao: string;
  chave: string;
  valorPadrao: string;
  obrigatorio: boolean;
  tabela?: string;
  tabelaColunaLabel?: string;
  tabelaColunaValor?: string;
  posicao: number;
  tipoEntrada: 'PRIMITIVO' | 'TABELA' | 'DEFINIDOS';
  multiplos: boolean;
  tipoPrimitivo?: 'INT' | 'STRING' | 'DATE';
  valoresFixos: Array<ValorDefinidoFixoBI>;
}
export function newReportParametrosBI(): ReportParametrosBI {
  return {
    chave: '',
    descricao: '',
    obrigatorio: true,
    posicao: 1,
    tabela: '',
    tabelaColunaLabel: '',
    tabelaColunaValor: '',
    tipoEntrada: 'TABELA',
    valorPadrao: '',
    valoresFixos: [],
    multiplos: false,
  };
}
