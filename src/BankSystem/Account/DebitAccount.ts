import Payment from '../Payment/Payment';
import Account, {AccountParams} from './Account';

export default class DebitAccount extends Account {
  constructor(params: AccountParams, private _balance: number = 0) {
    super(params);
  }

  get balance() {
    return this._balance;
  }

  receive(value: number, paymentHistory: Payment): void {
    this._balance += value;
    super.receive(value, paymentHistory);
  }
  send(value: number, paymentHistory: Payment): number {
    if (value < this.balance) {
      this._balance -= value;
    } else {
      throw new Error('Insufficient Value');
    }
    super.send(value, paymentHistory);
    return value;
  }
}
