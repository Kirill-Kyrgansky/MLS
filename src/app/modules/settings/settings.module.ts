import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { TableComponent } from './table/table.component';
import { GroupTableComponent } from './group-table/group-table.component';
import { GroupComponent } from './group/group.component';
import { StaffComponent } from './staff/staff.component';
import { CamerasComponent } from './cameras/cameras.component';
import { ModelsComponent } from './models/models.component';
import { TurnstileComponent } from './turnstile/turnstile.component';
import { PlaceComponent } from './place/place.component';
import { SettingsComponent } from './settings.component';
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    TableComponent,
    GroupTableComponent,
    GroupComponent,
    StaffComponent,
    CamerasComponent,
    ModelsComponent,
    TurnstileComponent,
    PlaceComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ComponentsModule
  ]
})
export class SettingsModule { }
