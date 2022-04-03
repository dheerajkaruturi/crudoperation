import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { accountLedger } from '../data.model';
import { Data } from '../data.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
})
export class CreateContactComponent implements OnInit {
  @ViewChild('editform') createEntry: NgForm;

  newAccountName = '';
  accountNumber = '';
  cardNumber = '';
  type = '';

  constructor(private createdDetails: Data) {}

  ngOnInit(): void {}

  //? form submission function: validations made using template driven approach
  oncreating() {
    //* if the input values are valid, form will be submitted else returned.
    if (this.createEntry.valid) {
      const newDetails = new accountLedger(
        this.newAccountName,
        this.accountNumber,
        this.cardNumber,
        this.type
      );
      this.createdDetails.addNewDetails(newDetails);

      this.createEntry.reset();
    } else {
      alert('Form is not valid');
      return;
    }
  }
}
