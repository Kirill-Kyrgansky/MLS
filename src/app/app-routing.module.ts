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
      path: 'reports',
      loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)
    },
    {
      path: 'administration',
      loadChildren: () => import('./modules/admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
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
