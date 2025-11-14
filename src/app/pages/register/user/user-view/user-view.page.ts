import { Component } from '@angular/core';

@Component({
  selector: 'app-user-view',
  imports: [],
  templateUrl: './user-view.page.html',
  styleUrl: './user-view.page.scss',
})
export class UserViewPage {
  public static TITLE: string = 'Usuários';
  public static ROTE: string = 'user';
}
