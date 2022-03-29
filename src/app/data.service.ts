export class Data {
  customerDetails = [
    {
      name: 'Jason',
      accountNumber: '0123456789',
      cardNumber: '0123456789123456',
      type: 'saving',
    },
    {
      name: 'John',
      accountNumber: '01234455289',
      cardNumber: '0123456789123456',
      type: 'current',
    },
  ];

  getDetails() {
    return this.customerDetails;
  }

  //* adding new details:
  addNewDetails(
    name: string,
    accountNumber: string,
    cardNumber: string,
    type: string
  ) {
    this.customerDetails.push({
      name: name,
      accountNumber: accountNumber,
      cardNumber: cardNumber,
      type: type,
    });
  }
}
