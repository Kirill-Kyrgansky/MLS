import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';

import { SignInComponent } from './sign-in/sign-in.component';
import { AuthorizationComponent } from './authorization.component';


@NgModule({
  declarations: [
    SignInComponent,
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
  ]
})
export class AuthorizationModule { }
