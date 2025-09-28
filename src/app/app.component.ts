import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { ToastComponent } from "./components/toast/toast.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'PlayReport';
}
