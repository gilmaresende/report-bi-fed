import { ValorDefinidoFixoBI } from './valor-definido-fixo-bi';

export interface ReportParametrosToPlay {
  descricao: string;
  chave: string;
  valorPadrao: string;
  obrigatorio: boolean;
  posicao: number;
  tipoEntrada: 'PRIMITIVO' | 'TABELA' | 'DEFINIDOS';
  tipoPrimitivo?: 'INT' | 'STRING' | 'DATE';
  valores: Array<ValorDefinidoFixoBI>;
}
