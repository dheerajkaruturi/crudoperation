import { Component, OnInit } from '@angular/core';
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

  deleteEntry(id: number) {
    console.log(this.userDetails.customerDetails[id]);

    this.userDetails.deleteHandler(id);
  }
}
