import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ReadContactComponent } from './read-contact/read-contact.component';
import { HeaderComponent } from './header/header.component';
import { Data } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateContactComponent,
    EditContactComponent,
    DeleteContactComponent,
    ReadContactComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [Data],
  bootstrap: [AppComponent],
})
export class AppModule {}
