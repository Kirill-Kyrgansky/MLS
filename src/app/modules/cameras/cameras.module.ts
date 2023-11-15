import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CamerasRoutingModule} from './cameras-routing.module';
import {CamerasComponent} from './cameras.component';
import {ViewCameraComponent} from './view-camera/view-camera.component';
import {CamerasListComponent} from './cameras-list/cameras-list.component';
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    CamerasComponent,
    ViewCameraComponent,
    CamerasListComponent,
  ],

  imports: [
    CommonModule,
    CamerasRoutingModule,
    ComponentsModule
  ]
})
export class CamerasModule {
}
