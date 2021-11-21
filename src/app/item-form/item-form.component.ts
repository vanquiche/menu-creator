import { Component, ViewChild, ElementRef } from '@angular/core';
import { CATEGORY_SELECT } from '../CategorySelect';
import { MenuService } from '../menu.service';
import { BlurViewService } from '../blur-view.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  // toggle blur class on 'add new' btn
  formActive: boolean = false;

  constructor(
    private menuService: MenuService,
    private blurUI: BlurViewService,
    public modalService: NgbModal
  ) {}
  // Methods
  openForm(content: any) {
    this.blurUI.setState('addform');
    this.modalService.open(content, {backdrop: 'static', keyboard: false})
    this.formActive = true;
  }

  closeForm() {
    this.blurUI.setState(null);
    this.formActive = false;
  }

  onSubmit(data: any) {
    // assign id to object
    data.form.value.id = new Date().toISOString();
    // send form data to parent
    this.menuService.addItem(data.form.value);

    // reset form back to default
    data.reset();
    this.blurUI.setState(null);
    this.formActive = false;

  }
}
