import { Component } from '@angular/core';

@Component({
  selector: 'app-group-list',
  imports: [],
  templateUrl: './group-list.page.html',
  styleUrl: './group-list.page.scss',
})
export class GroupListPage {
  public static TITLE: string = 'Grupos de Usuários';
  public static ROTE: string = 'group-list';
}
