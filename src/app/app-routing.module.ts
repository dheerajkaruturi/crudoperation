import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ReadContactComponent } from './read-contact/read-contact.component';

const routes: Routes = [
  //? routing declarations:

  { path: '', component: ReadContactComponent },

  { path: 'home', component: ReadContactComponent },

  { path: 'addnew', component: CreateContactComponent },

  {
    path: 'editdetails/:id/:name/:accnum/:cardnum/:type',
    component: EditContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
