import { Component, OnInit} from '@angular/core';
import {MenuItem} from '../../interface/component-templates/IMenu';
import {ClickOutsideService} from "../service/click-outside.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name: string = 'Иванов И.И.'
  burgerMenu: MenuItem[] = []
  headers: MenuItem[] = []
  burgerMenuShow: boolean = false;

  constructor(private clickOutsideService: ClickOutsideService) {
  }
  ngOnInit(): void {
    this.burgerMenu = [
      {label: 'События', icon: '../assets/images/icons/Notifications.svg', routerLink: 'reports/events', count: 4},
      {label: 'Настройки', icon: '../assets/images/icons/Notifications.svg', routerLink: 'settings'},
      {label: 'Выход', icon: '../assets/images/icons/ArrowLeft.svg', routerLink: 'exit'},
    ]
    this.headers = [
      {label: 'Камеры', icon: 'pi pi-fw pi-home', routerLink: 'cameras'},
      {label: 'Отчеты', icon: 'pi pi-fw pi-calendar', routerLink: 'reports/events'},
      {label: 'Справочники', icon: 'pi pi-fw pi-pencil', routerLink: 'handbook/cameras'},
    ];
    this.clickOutsideService.setComponent(this);

  }

  totalCount(): number {
    return this.burgerMenu.reduce((acc, item) => acc + (item.count || 0), 0);
  }

  changeVisibleBurgerMenu(isOpen: boolean): void {
    this.burgerMenuShow = isOpen;
  }

}
