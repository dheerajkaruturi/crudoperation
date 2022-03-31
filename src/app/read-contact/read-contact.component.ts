import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { accountLedger } from '../data.model';
import { Data } from '../data.service';

@Component({
  selector: 'app-read-contact',
  templateUrl: './read-contact.component.html',
  styleUrls: ['./read-contact.component.css'],
})
export class ReadContactComponent implements OnInit {
  public userDet: {
    id?: number;
    name: string;
    accountNumber: string;
    cardNumber: string;
    type: string;
  }[] = [];

  constructor(private userDetails: Data) {}

  ngOnInit() {
    this.userDet = this.userDetails.getDetails();
  }

  //* delete function
  deleteEntry(id: number) {
    this.userDetails.deleteHandler(id);
  }
  //* edit function
  editEntry(id: number) {
    this.userDetails.editSelectedEntry(this.userDetails.customerDetails[id]);
  }
}
