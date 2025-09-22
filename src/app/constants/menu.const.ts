import { HomePage } from '../pages/base/home/home.page';
import { ReportEntityPage } from '../pages/register/report-entity/report-entity.page';
import { ReportListPage } from '../pages/register/report-list/report-list.page';

interface MenuRota {
  nome: string;
  rota: string;
  icon?: string;
}

const MENUS_APP: Array<MenuRota> = [
  {
    nome: HomePage.TITLE,
    rota: HomePage.ROTE,
  },
  {
    nome: ReportListPage.TITLE,
    rota: ReportListPage.ROTE,
  },
  {
    nome: ReportEntityPage.TITLE,
    rota: ReportEntityPage.ROTE,
  },
];

export default MENUS_APP;
