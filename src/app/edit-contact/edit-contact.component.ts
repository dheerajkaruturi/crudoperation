import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userDetails = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      accNum: this.route.snapshot.params['accnum'],
      cardNum: this.route.snapshot.params['cardnum'],
      type: this.route.snapshot.params['type'],
    };

    console.log(this.userDetails);

    //? populating the input values using the data passed through the route parameters with 2way data binding
    this.route.params.subscribe(() => {
      this.accHoldername = this.userDetails['name'];
      this.accNum = this.userDetails['accNum'];
      this.cardNum = this.userDetails['cardNum'];
      this.acctype = this.userDetails['type'];
    });
  }
}
