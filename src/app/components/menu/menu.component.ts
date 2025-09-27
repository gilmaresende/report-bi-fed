import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/infra/auth-service.service';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BuildService } from '../../services/infra/build.service';
import ROTAS from '../../core/constants/rotas.const';
import MENUS_APP from '../../core/constants/menu.const';
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
  items2: any[] = [
    {
      nome: 'Report',
      rota: '',
      icon: '',
    },
  ];

  ngOnInit() {
    const menusStr = MENUS_APP;
    this.items = menusStr.map((item) => {
      const iMenu = item;
      return {
        label: iMenu.nome,
        target: iMenu.rota,
        icon: iMenu.icon,
        command: this.click,
        //items:[]
      };
    });
  }

  click = (e: any) => {
    this.build.getRouteService().nav(`${ROTAS.BASE_AUTH}/${e.item.target}`);
  };
}
