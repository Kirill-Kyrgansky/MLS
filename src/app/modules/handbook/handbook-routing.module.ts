import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HandbookComponent} from "./handbook.component";
import {CamerasComponent} from "./cameras/cameras.component";
import {StaffComponent} from "./staff/staff.component";
import {GroupComponent} from "./group/group.component";
import {PlaceComponent} from "./place/place.component";
import {TurnstileComponent} from "./turnstile/turnstile.component";
import {ModelsComponent} from "./models/models.component";

const routes: Routes = [
  {
    path: '',
    component: HandbookComponent,
    children: [
      {
        path: 'cameras',
        component: CamerasComponent
      },
      {
        path: 'staff',
        component: StaffComponent
      },
      {
        path: 'group',
        component: GroupComponent
      },
      {
        path: 'place',
        component: PlaceComponent
      },
      {
        path: 'turnstile',
        component: TurnstileComponent
      },
      {
        path: 'model',
        component: ModelsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HandbookRoutingModule {
}
