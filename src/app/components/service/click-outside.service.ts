import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickOutsideService {

  component: any;

  setComponent(component: any): void {
    this.component = component;
  }

  closeBurgerMenu(): void {
    if (this.component) {
      this.component.changeVisibleBurgerMenu(false);
    }
  }
}
