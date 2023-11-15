import { Component } from '@angular/core';
import {MenuItem} from "../../interface/component-templates/IMenu";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  sidebarReports: MenuItem[] = [
    {
      label: 'События',
      routerLink: 'events'
    },
    {
      label: 'Графики',
      routerLink: 'chart'
    }
  ]
}
