import { TipoEntradaBIEnum } from '../constants/tipo-entrada-bi';

export interface ReportParametrosBI {
  id?: number;
  descricao: string;
  chave: string;
  valorPadrao: string;
  obrigatorio: boolean;
  tabela: string;
  posicao: number;
  tipoEntrada: 'PRIMITIVO' | 'TABELA' | 'DEFINIDOS';
}
export function newReportParametrosBI(): ReportParametrosBI {
  return {
    chave: 'chave',
    descricao: 'teste',
    obrigatorio: true,
    posicao: 1,
    tabela: 'compra',
    tipoEntrada: 'PRIMITIVO',
    valorPadrao: '',
  };
}
