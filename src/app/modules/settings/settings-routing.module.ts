import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from "./create-user/create-user.component";
import {SettingsComponent} from "./settings.component";

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'create-user',
        component: CreateUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
