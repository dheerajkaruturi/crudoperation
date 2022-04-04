import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { accountLedger } from '../data.model';
import { Data } from '../data.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  userDetails!: {
    id: number;
    name: string;
    accNum: string;
    cardNum: string;
    type: string;
  };

  //* 2-way binding:
  accHoldername = '';

  accNum = '';

  cardNum = '';

  acctype = '';

  constructor(private route: ActivatedRoute, private datatoSend: Data) {}

  ngOnInit(): void {
    this.userDetails = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      accNum: this.route.snapshot.params['accnum'],
      cardNum: this.route.snapshot.params['cardnum'],
      type: this.route.snapshot.params['type'],
    };

    //? populating the input values subscribing the data passed through the route parameters with 2way data binding.
    this.route.params.subscribe(() => {
      this.accHoldername = this.userDetails['name'];
      this.accNum = this.userDetails['accNum'];
      this.cardNum = this.userDetails['cardNum'];
      this.acctype = this.userDetails['type'];
    });
    console.log(this.accHoldername, this.accNum, this.cardNum, this.acctype);
  }

  submitEdittedForm() {
    console.log(this.accHoldername, this.accNum, this.cardNum, this.acctype);

    //? edited details of the existing user and replacing them with old one.
    const editedEntry = new accountLedger(
      this.accHoldername,
      this.accNum,
      this.cardNum,
      this.acctype
    );

    //* sending to service
    this.datatoSend.editSelectedEntry(this.userDetails.id - 1, editedEntry);
  }
}
