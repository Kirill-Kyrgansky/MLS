import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interface/IMenu';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name: string = 'Иванов И.И.'
  burgerMenu: MenuItem[] = []
  headers: MenuItem[] = []
  burgerMenuShow: boolean = false;

  ngOnInit(): void {
    this.burgerMenu = [
      {label: 'События', icon: '../assets/images/icons/Notifications.svg', routerLink: 'events', count: 4},
      {label: 'Выход', icon: '../assets/images/icons/ArrowLeft.svg', routerLink: 'exit'},
    ]
    this.headers = [
      {label: 'Камеры', icon: 'pi pi-fw pi-home', routerLink: 'cameras/1'},
      {label: 'Отчеты', icon: 'pi pi-fw pi-calendar'},
      {label: 'Справочники', icon: 'pi pi-fw pi-pencil'},
    ];
  }

  totalCount(): number {
    return this.burgerMenu.reduce((acc, item) => acc + (item.count || 0), 0);
  }

  changeVisibleBurgerMenu(): void {
    this.burgerMenuShow = !this.burgerMenuShow
  }

}
