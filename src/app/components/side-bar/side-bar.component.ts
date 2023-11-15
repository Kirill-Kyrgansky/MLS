import {Component, Input} from '@angular/core';
import {MenuItem} from "../../interface/IMenu";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Input() sideMenuLinks: MenuItem[] | undefined
}
