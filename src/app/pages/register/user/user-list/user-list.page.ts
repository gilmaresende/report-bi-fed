import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.page.html',
  styleUrl: './user-list.page.scss',
})
export class UserListPage {
  public static TITLE: string = 'Usuários';
  public static ROTE: string = 'user-list';
}
