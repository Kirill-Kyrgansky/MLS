import {Component} from '@angular/core';
import {MenuItem} from "../../interface/IMenu";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  sidebarSettings: MenuItem[] = [
    {
      label: 'Добавить пользователя',
      routerLink: 'create-user'
    }
  ]
}
