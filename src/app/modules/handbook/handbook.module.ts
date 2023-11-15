import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandbookRoutingModule } from './handbook-routing.module';
import { HandbookComponent } from './handbook.component';
import {TableComponent} from "./table/table.component";
import {GroupTableComponent} from "./group-table/group-table.component";
import {GroupComponent} from "./group/group.component";
import {StaffComponent} from "./staff/staff.component";
import {CamerasComponent} from "./cameras/cameras.component";
import {ModelsComponent} from "./models/models.component";
import {TurnstileComponent} from "./turnstile/turnstile.component";
import {PlaceComponent} from "./place/place.component";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    HandbookComponent,
    TableComponent,
    GroupTableComponent,
    GroupComponent,
    StaffComponent,
    CamerasComponent,
    ModelsComponent,
    TurnstileComponent,
    PlaceComponent,
  ],
  imports: [
    CommonModule,
    HandbookRoutingModule,
    ComponentsModule
  ]
})
export class HandbookModule { }
