import { Routes } from '@angular/router';
import { ReportListPage } from './pages/register/report-list/report-list.page';
import { HomePage } from './pages/base/home/home.page';
import { ReportEntityPage } from './pages/register/report-entity/report-entity.page';
import { ReportPlayComponent } from './pages/report-play/report-play.component';
import { ConfigComponent } from './pages/config/config.component';

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
];
