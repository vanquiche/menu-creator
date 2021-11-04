import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  // TODOS
  // check box to true of false depending on item value -- done
  // change value of checkboxes upon toggle
  // edit and delete functions

  @Input() item!: Item;
  @Output() deleteItem = new EventEmitter<string>();
  constructor() { }

  onDelete(id: any) {
    this.deleteItem.emit(id);
  }

  onEdit() {
    
  }
}
