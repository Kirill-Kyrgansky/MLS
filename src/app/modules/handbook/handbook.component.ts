import { Component } from '@angular/core';
import {MenuItem} from "../../interface/component-templates/IMenu";

@Component({
  selector: 'app-reports',
  templateUrl: './handbook.component.html',
  styleUrls: ['./handbook.component.scss']
})
export class HandbookComponent {
sidebarReports: MenuItem[] = [
  {label: 'Камеры', routerLink: 'cameras'},
  {
    routerLink: 'staff',
    label: 'Сотрудники'
  },
  {
    routerLink: 'group',
    label: 'Группы'
  },
  {
    routerLink: 'place',
    label: 'Расположение'
  },
  {
    routerLink: 'turnstile',
    label: 'Турникеты'
  },
  {
    routerLink: 'model',
    label: 'Модели'
  }
]
}
