import { Component } from '@angular/core';

@Component({
  selector: 'app-report-list',
  imports: [],
  templateUrl: './report-list.page.html',
  styleUrl: './report-list.page.scss',
})
export class ReportListPage {
  public static TITLE: string = 'Lista relatórios';
  public static ROTE: string = 'report-list-register';
}
