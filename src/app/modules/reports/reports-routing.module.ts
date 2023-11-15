import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReportsComponent} from "./reports.component";
import {ChartComponent} from "./chart/chart.component";
import {EventsComponent} from "./events/events.component";

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      {
        path: 'events',
        component: EventsComponent
      },
      {
        path: 'chart',
        component: ChartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
