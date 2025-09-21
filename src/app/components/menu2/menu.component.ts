import { Component, HostListener } from '@angular/core';
import { AuthServiceService } from '../../services/infra/auth-service.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(private authService: AuthServiceService) {}

  menu: any[] = [];
  ngOnInit(): void {
    const menusStr = this.authService.getMenus();
    this.menu = menusStr.map((item) => JSON.parse(item));
  }

  expanded = true;

  menuItems = [
    { label: 'Início', icon: 'fas fa-home' },
    { label: 'Configurações', icon: 'fas fa-cog' },
    { label: 'Usuários', icon: 'fas fa-users' },
    { label: 'Sair', icon: 'fas fa-sign-out-alt' },
  ];

  toggleMenu() {
    this.expanded = !this.expanded;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const menu = document.querySelector('.menu-container'); // Obtém o menu
    setTimeout(() => {
      if (menu && !menu.contains(event.target as Node)) {
        this.expanded = false; // Fecha o menu
      }
    }, 500);
  }
}
