import { Component, Input} from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent {

  menu = this.menuService.getMenu();
  
  constructor(private menuService: MenuService) { }



}
