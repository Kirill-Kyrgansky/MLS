import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArchiveComponent} from "./archive.component";
import {ChartComponent} from "./chart/chart.component";

const routes: Routes = [
  {
    path: '',
    component: ArchiveComponent,
    children: [
      {
        path: 'chart',
        component: ChartComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveRoutingModule {
}
