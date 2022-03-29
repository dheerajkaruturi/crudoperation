import { Component, OnInit } from '@angular/core';
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
    this.createdDetails.addNewDetails(
      this.newAccountName,
      this.accountNumber,
      this.cardNumber,
      this.type
    );
  }
}
