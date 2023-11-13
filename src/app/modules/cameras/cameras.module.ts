import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamerasRoutingModule } from './cameras-routing.module';
import { CamerasComponent } from './cameras.component';
import { ViewCameraComponent } from './view-camera/view-camera.component';


@NgModule({
  declarations: [
    CamerasComponent,
    ViewCameraComponent
  ],
  imports: [
    CommonModule,
    CamerasRoutingModule
  ]
})
export class CamerasModule { }
