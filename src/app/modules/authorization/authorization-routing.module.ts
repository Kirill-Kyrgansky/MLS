import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./sign-in/sign-in.component";
import {AuthorizationComponent} from "./authorization.component";

const routes: Routes = [
  {path: '', component: AuthorizationComponent, children: [
      {path: 'login', component: SignInComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
