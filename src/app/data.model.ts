export class accountLedger {
  name: string;
  accountNumber: string;
  cardNumber: string;
  type: string;

  constructor(
    name: string,
    accountNumber: string,
    cardNumber: string,
    type: string
  ) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.cardNumber = cardNumber;
    this.type = type;
  }
}
