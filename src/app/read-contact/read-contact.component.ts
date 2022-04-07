import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { accountLedger } from '../data.model';
import { Data } from '../data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-read-contact',
  templateUrl: './read-contact.component.html',
  styleUrls: ['./read-contact.component.css'],
})
export class ReadContactComponent implements OnInit {
  baseURL: string =
    'https://angular-crud-d0e1f-default-rtdb.firebaseio.com/ledger.json';

  isLoading: boolean = false;

  userDet: accountLedger[] = [];

  constructor(private userDetails: Data, private httpEntry: HttpClient) {}

  ngOnInit() {
    this.isLoading = true;

    this.userDetails.fetchEntries().subscribe((entry) => {
      this.isLoading = false;

      console.log(entry);

      this.userDet = entry;
    });
  }

  //* delete function
  deleteEntry(id: number) {
    //this.userDetails.deleteHandler(id);
  }
}
