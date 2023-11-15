import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import {ComponentsModule} from "../../components/components.module";
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
  declarations: [

    SettingsComponent,
     CreateUserComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ComponentsModule
  ]
})
export class SettingsModule { }
