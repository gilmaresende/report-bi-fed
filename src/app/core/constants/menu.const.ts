import { HomePage } from '../../pages/base/home/home.page';
import { ConfigComponent } from '../../pages/config/config.component';
import { GroupListPage } from '../../pages/register/group/group-list/group-list.page';
import { ReportListPage } from '../../pages/register/report-list/report-list.page';
import { UserListPage } from '../../pages/register/user/user-list/user-list.page';

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
    nome: UserListPage.TITLE,
    rota: UserListPage.ROTE,
  },
  {
    nome: GroupListPage.TITLE,
    rota: GroupListPage.ROTE,
  },
  {
    nome: ConfigComponent.TITLE,
    rota: ConfigComponent.ROTE,
  },
];

export default MENUS_APP;
