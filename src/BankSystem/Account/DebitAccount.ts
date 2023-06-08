import {PaymentParams} from '../Payment/Payment';
import Account, {AccountParams} from './Account';

export default class DebitAccount extends Account {
  public static _accountType: string = 'Débito';
  constructor(params: AccountParams, private _balance: number = 0) {
    super(params);
  }

  get accountType(): string {
    return DebitAccount._accountType;
  }

  get balance() {
    return this._balance;
  }

  receive(value: number, paymentHistory: PaymentParams): void {
    this._balance += value;
    super.receive(value, paymentHistory);
  }
  send(value: number, paymentHistory: PaymentParams): number {
    if (value < this.balance) {
      this._balance -= value;
    } else {
      throw new Error('Insufficient Value');
    }
    super.send(value, paymentHistory);
    return value;
  }
}
