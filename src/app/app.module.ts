import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
