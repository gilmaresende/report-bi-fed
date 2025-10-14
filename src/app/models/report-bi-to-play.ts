import { ReportParametrosBI } from './report-parametros-bi';
import { ReportParametrosToPlay } from './report-parametros-bi-to-play';

export interface ReportToPlay {
  id: number;
  descricao: string;
  parametros: Array<ReportParametrosToPlay>;
}
