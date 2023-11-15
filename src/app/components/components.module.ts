import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from "./header/header.component";
import { SideBarComponent } from './side-bar/side-bar.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    SideBarComponent
  ],
})
export class ComponentsModule {
}
