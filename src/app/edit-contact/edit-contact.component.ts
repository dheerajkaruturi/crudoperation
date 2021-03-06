import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  editForm: FormGroup;

  //* 2-way binding:
  accHoldername = '';

  accNum: string = '';

  cardNum: string = '';

  acctype: string = '';

  crypticId: number;

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
      this.crypticId = this.userDetails['id'];
    });
    console.log(this.accHoldername, this.accNum, this.cardNum, this.acctype);

    //? form validations:
    this.editForm = new FormGroup({
      accountHolderName: new FormControl(this.accHoldername, [
        Validators.required,
        Validators.minLength(3),
      ]),
      accountNumber: new FormControl(this.accNum, [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
      cardNumber: new FormControl(this.cardNum, [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
      accountType: new FormControl(this.acctype, Validators.required),
    });
  }

  //? form submission
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
    this.datatoSend.editEntry(editedEntry ,this.crypticId);
  }
}
