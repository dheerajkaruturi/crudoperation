import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  accHoldername = 'jonas';
  accNum = '';
  cardNum = '';
  acctype = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userDetails = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      accNum: this.route.snapshot.params['accname'],
      cardNum: this.route.snapshot.params['cardnum'],
      type: this.route.snapshot.params['type'],
    };
  }
  
}
