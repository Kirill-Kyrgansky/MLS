import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  constructor(public router: Router) {
  }
  test() {
    this.router.navigate(['/cameras'])
  }
}
