import { newQueryBI, QueryBI } from './query-bi';
import {
  newReportParametrosBI,
  ReportParametrosBI,
} from './report-parametros-bi';

export interface ReportBI {
  id?: number;
  descricao: string;
  ativo: boolean;
  query: QueryBI;
  parametros: Array<ReportParametrosBI>;
}

export function newReportBI(): ReportBI {
  return {
    descricao: 'teste',
    ativo: true,
    parametros: [newReportParametrosBI()],
    query: newQueryBI(),
  };
}
