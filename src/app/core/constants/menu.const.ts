import { HomePage } from '../../pages/base/home/home.page';
import { ConfigComponent } from '../../pages/config/config.component';
import { ReportListPage } from '../../pages/register/report-list/report-list.page';

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
    nome: ConfigComponent.TITLE,
    rota: ConfigComponent.ROTE,
  },
];

export default MENUS_APP;
