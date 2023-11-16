import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from "./header/header.component";
import { SideBarComponent } from './side-bar/side-bar.component';
import {RouterLink} from "@angular/router";
import { AppClickOutside } from './directive/appClickOutside';


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    AppClickOutside
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
