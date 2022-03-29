import { accountLedger } from './data.model';

export class Data {
  customerDetails: accountLedger[] = [
    new accountLedger('Jason', '0123456789', '0123456789123456', 'saving'),
    new accountLedger('John', '01234455289', '0123456789123456', 'current'),
  ];

  getDetails() {
    return this.customerDetails;
  }

  //* adding new details:
  addNewDetails(details: accountLedger) {
    this.customerDetails.push(details);
  }

  //* delete selected entry:

  deleteHandler(id: number): accountLedger[] {
    return this.customerDetails.splice(id, 1);
  }
}
