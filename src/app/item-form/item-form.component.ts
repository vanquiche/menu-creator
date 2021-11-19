import { Component, ViewChild, ElementRef, Inject } from '@angular/core';
import { CATEGORY_SELECT } from '../CategorySelect';
import { MenuService } from '../menu.service';
import { BlurViewService } from '../blur-view.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
})
export class ItemFormComponent {
  @ViewChild('form', { static: true }) addForm!: ElementRef;
  // Properties
  // loop over for select drop-down menu
  categorySelect = CATEGORY_SELECT;

  formActive: boolean = false;

  constructor(
    private menuService: MenuService,
    private blurUI: BlurViewService,
    @Inject(DOCUMENT) private document: Document
  ) {}
  // Methods
  openForm() {
    this.formActive = true;
    this.blurUI.setState('addform');
  }

  closeForm() {
    this.formActive = false;
    this.blurUI.setState(null);
  }

  onSubmit(data: any) {
    // assign id to object
    data.form.value.id = new Date().toISOString();
    // send form data to parent
    this.menuService.addItem(data.form.value);

    // reset form back to default
    data.reset();
    this.formActive = false;
    this.blurUI.setState(null);
  }
}
