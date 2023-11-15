import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
      path: 'cameras',
      loadChildren: () => import('./modules/cameras/cameras.module').then(m => m.CamerasModule),
    },
    {
      path: '',
      loadChildren: () => import('./modules/authorization/authorization.module').then(m => m.AuthorizationModule)
    },
    {
      path: 'handbook',
      loadChildren: () => import('./modules/handbook/handbook.module').then(m => m.HandbookModule)
    },
    {
      path: 'administration',
      loadChildren: () => import('./modules/admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
    },
    {
      path: 'settings',
      loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
    },
    {
      path: 'reports',
      loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)
    },
    {
      path: '**', redirectTo: 'cameras'
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
