import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchiveRoutingModule } from './archive-routing.module';
import { ArchiveComponent } from './archive.component';
import { ChartComponent } from './chart/chart.component';
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    ArchiveComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    ArchiveRoutingModule,
    ComponentsModule
  ]
})
export class ArchiveModule { }
