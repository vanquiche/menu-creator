import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../Item';
import { Style } from '../UserStyle';
import { Observable } from 'rxjs';

@Component({
  selector: 'menu-card',
  templateUrl: './menu-card2.component.html',
  styleUrls: ['./menu-card2.component.css'],
})
export class MenuCard2Component implements OnInit {
  @Input() category!: Observable<Item[]>;
  @Input() title!: string;
  @Input() styles!: Style;


  constructor() {}

  ngOnInit(): void {}
}
