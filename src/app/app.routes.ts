import { Routes } from '@angular/router';
import { ReportListPage } from './pages/register/report-list/report-list.page';
import { HomePage } from './pages/base/home/home.page';
import { ReportEntityPage } from './pages/register/report-entity/report-entity.page';
import { ReportPlayComponent } from './pages/report-play/report-play.component';
import { ConfigComponent } from './pages/config/config.component';
import { UserListPage } from './pages/register/user/user-list/user-list.page';
import { GroupListPage } from './pages/register/group/group-list/group-list.page';
import { UserViewPage } from './pages/register/user/user-view/user-view.page';
import { GroupViewPage } from './pages/register/group/group-view/group-view.page';

export const routes: Routes = [
  {
    path: HomePage.ROTE,
    component: HomePage,
  },
  {
    path: ReportListPage.ROTE,
    component: ReportListPage,
  },
  { path: ConfigComponent.ROTE, component: ConfigComponent },
  { path: ReportEntityPage.ROTE, component: ReportEntityPage },
  { path: `${ReportEntityPage.ROTE}/:id`, component: ReportEntityPage },
  { path: `${ReportPlayComponent.ROTE}/:id`, component: ReportPlayComponent },
  { path: UserListPage.ROTE, component: UserListPage },
  { path: GroupListPage.ROTE, component: GroupListPage },
  { path: UserViewPage.ROTE, component: UserViewPage },
  { path: `${UserViewPage.ROTE}/:id`, component: UserViewPage },
  { path: GroupViewPage.ROTE, component: GroupViewPage },
  { path: `${GroupViewPage.ROTE}/:id`, component: GroupViewPage },
];
