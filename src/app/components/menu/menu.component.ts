import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/infra/auth-service.service';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BuildService } from '../../services/build/build.service';
import { HumanizaHomePage } from '../../page/humaniza-home/humaniza-home.page';
@Component({
  selector: 'app-menu',
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(
    private authService: AuthServiceService,
    private build: BuildService
  ) {}

  menu: any[] = [];

  items: MenuItem[] | undefined;

  ngOnInit() {
    const menusStr = this.authService.getMenus();
    this.items = menusStr.map((item) => {
      const iMenu = JSON.parse(item);
      return {
        label: iMenu.nome,
        target: iMenu.rota,
        icon: 'pi pi-home',
        command: this.click,
        //items:[]
      };
    });
    this.items.push({
      label: 'Sair',
      icon: 'pi pi-home',
      command: this.sair,
    });
  }

  click = (e: any) => {
    this.build.getRouteService().nav(`auth/${e.item.target}`);
  };

  sair = () => {
    this.build.getStorage().removeItem('token');
    this.build.getRouteService().nav(HumanizaHomePage.ROTE);
  };
}
