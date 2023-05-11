import Account, {AccountParams} from './Account';

export default class DebitAccount extends Account {
  constructor(params: AccountParams, private _balance: number = 0) {
    super(params);
  }

  get balance() {
    return this._balance;
  }

  receive(value: number): void {
    this._balance += value;
  }
  send(value: number): number {
    if (value < this.balance) {
      this._balance -= value;
    } else {
      throw new Error('Insufficient Value');
    }
    return this.balance;
  }
}
