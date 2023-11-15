import { Component } from '@angular/core';
import {MenuItem} from "../../interface/IMenu";

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
