import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { FilterMenuPipe } from './filter-menu.pipe';
import { MenuCard2Component } from './menu-card2/menu-card2.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent,
    ItemCardComponent,
    EditFormComponent,
    MenuViewComponent,
    FilterMenuPipe,
    MenuCard2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
