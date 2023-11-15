import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CamerasComponent} from './cameras.component';
import {ViewCameraComponent} from './view-camera/view-camera.component';
import {CamerasListComponent} from "./cameras-list/cameras-list.component";

const routes: Routes = [
  {
    path: '',
    component: CamerasComponent,
    children: [
      {
        path: '1',
        component: ViewCameraComponent
      },
      {
        path: 'cameras-list',
        component: CamerasListComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamerasRoutingModule {
}
