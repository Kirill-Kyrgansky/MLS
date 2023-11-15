import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CamerasComponent} from "./cameras/cameras.component";
import {GroupComponent} from "./group/group.component";
import {GroupTableComponent} from "./group-table/group-table.component";
import {ModelsComponent} from "./models/models.component";
import {PlaceComponent} from "./place/place.component";
import {StaffComponent} from "./staff/staff.component";
import {TableComponent} from "./table/table.component";
import {TurnstileComponent} from "./turnstile/turnstile.component";

const routes: Routes = [
  {
    path: 'cameras', component: CamerasComponent
  },
  {
    path: 'group', component: GroupComponent
  },
  {
    path: 'group-table', component: GroupTableComponent
  },
  {
    path: 'models', component: ModelsComponent
  },
  {
    path: 'place', component: PlaceComponent
  },
  {
    path: 'staff', component: StaffComponent
  },
  {
    path: 'table', component: TableComponent
  },
  {
    path:'turnstile', component: TurnstileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
