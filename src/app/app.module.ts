import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ReadContactComponent } from './read-contact/read-contact.component';
import { HeaderComponent } from './header/header.component';
import { Data } from './data.service';

//? routing declarations:

const appRoute: Routes = [
  { path: '', component: ReadContactComponent },

  { path: 'home', component: ReadContactComponent },

  { path: 'addnew', component: CreateContactComponent },

  { path: 'editdetails', component: EditContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateContactComponent,
    EditContactComponent,
    DeleteContactComponent,
    ReadContactComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoute), FormsModule],
  providers: [Data],
  bootstrap: [AppComponent],
})
export class AppModule {}
