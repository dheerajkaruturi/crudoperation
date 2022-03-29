import { Component, OnInit } from '@angular/core';
import { accountLedger } from '../data.model';
import { Data } from '../data.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
})
export class CreateContactComponent implements OnInit {
  newAccountName = '';
  accountNumber = '';
  cardNumber = '';
  type = '';

  constructor(private createdDetails: Data) {}

  ngOnInit(): void {}

  addDetailsHandler() {
    const newDetails = new accountLedger(
      this.newAccountName,
      this.accountNumber,
      this.cardNumber,
      this.type
    );
    this.createdDetails.addNewDetails(newDetails);

    this.newAccountName = '';
    this.accountNumber = '';
    this.cardNumber = '';
    this.type = '';
  }
}
