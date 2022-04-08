import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ReadContactComponent } from './read-contact/read-contact.component';
import { HeaderComponent } from './header/header.component';
import { Data } from './data.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
 

@NgModule({
  declarations: [
    AppComponent,
    CreateContactComponent,
    EditContactComponent,
    DeleteContactComponent,
    ReadContactComponent,
    HeaderComponent,
   
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideDatabase(() => getDatabase())],
  providers: [Data],
  bootstrap: [AppComponent],
})
export class AppModule {}
