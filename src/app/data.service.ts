import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { accountLedger } from './data.model';
import { map } from 'rxjs/operators';

@Injectable()
export class Data {
  customerDetails: accountLedger[] = [];

  baseURL: string =
    'https://angular-crud-d0e1f-default-rtdb.firebaseio.com/ledger.json';

  constructor(private httpData: HttpClient) {}

  fetchEntries() {
    return this.httpData.get(this.baseURL).pipe(
      map((response) => {
        const entriesRetrieved = [];
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            entriesRetrieved.push({ id: key, ...response[key] });
          }
        }
        return entriesRetrieved;
      })
    );
  }

  //* adding new details: post method
  addNewDetails(details: accountLedger) {
    //this.customerDetails.push(details);

    this.httpData.post(this.baseURL, details).subscribe((newEntry) => {
      console.log(newEntry);
    });
  }

  //* delete selected entry:

  deleteHandler(id: number): accountLedger[] {
    return this.customerDetails.splice(id, 1);
  }

  //* replacing the selected entry:
  editSelectedEntry(id: number, entry: accountLedger) {
    this.customerDetails.splice(id, 1, entry);
  }
}
