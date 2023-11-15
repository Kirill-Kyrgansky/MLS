import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ChartComponent } from './chart/chart.component';
import { EventsComponent } from './events/events.component';
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    ReportsComponent,
    ChartComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ComponentsModule
  ]
})
export class ReportsModule { }
