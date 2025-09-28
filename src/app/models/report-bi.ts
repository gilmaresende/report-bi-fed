import { newQueryBI, QueryBI } from './query-bi';
import {
  ReportParametrosBI
} from './report-parametros-bi';

export interface ReportBI {
  id?: number;
  descricao: string;
  ativo: boolean;
  query: QueryBI;
  parametros: Array<ReportParametrosBI>;
}

export function newReportBI(): ReportBI {
  const query = newQueryBI();
  query.principal = true;
  return {
    descricao: '',
    ativo: true,
    parametros: [],
    query: query,
  };
}
