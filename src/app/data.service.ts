import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { accountLedger } from './data.model';
import { map } from 'rxjs/operators';
import { Database, set, ref } from '@angular/fire/database';
import { remove, update } from '@firebase/database';

@Injectable()
export class Data {
  customerDetails: accountLedger[] = [];

  baseURL: string =
    'https://angular-crud-d0e1f-default-rtdb.firebaseio.com/ledger.json';

  constructor(private httpData: HttpClient, private db: Database) {}

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

  deleteHandler(entryID: number | string) {
    if (window.confirm('Are you sure to Delete Entry')) {
      remove(ref(this.db, 'ledger/' + entryID));
    } else {
      return;
    }
  }

  //* replacing the selected entry:
  editEntry(entry: accountLedger, id: number) {
    update(ref(this.db, 'ledger/' + id), entry);
  }
}
