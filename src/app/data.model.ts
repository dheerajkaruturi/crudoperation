export class accountLedger {
  id: number;
  name: string;
  accountNumber: string;
  cardNumber: string;
  type: string;

  constructor(
    id: number,
    name: string,
    accountNumber: string,
    cardNumber: string,
    type: string
  ) {
    this.id = id;
    this.name = name;
    this.accountNumber = accountNumber;
    this.cardNumber = cardNumber;
    this.type = type;
  }
}
