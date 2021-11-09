import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit {
  @Input() display: any;
  constructor() { }
  
  ngOnInit(): void {
  }

}
