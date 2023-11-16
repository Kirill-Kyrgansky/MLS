import {Directive, ElementRef, HostListener} from '@angular/core';
import {ClickOutsideService} from "../service/click-outside.service";

@Directive({
  selector: '[appClickOutside]'
})
export class AppClickOutside {
  constructor(
    private elementRef: ElementRef,
    private clickOutsideService: ClickOutsideService
  ) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      // Вызываем метод из сервиса для закрытия бургер-меню
      this.clickOutsideService.closeBurgerMenu();
    }
  }
}
