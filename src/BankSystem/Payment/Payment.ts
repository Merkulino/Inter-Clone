import Account from '../Account/Account';

export type PaymentParams = {
  fromAccount: Account;
  toAccount: Account;
  value: number;
  date?: Date;
};

export default abstract class Payment {
  private _fromAccount: Account;
  private _toAccount: Account;
  private _value: number;
  private _date: Date = new Date();
  constructor({
    fromAccount,
    toAccount,
    value,
    date = new Date(),
  }: PaymentParams) {
    this._fromAccount = fromAccount;
    this._toAccount = toAccount;
    this._value = value;
    this._date = date;
  }

  get fromAccount() {
    return this._fromAccount;
  }

  get toAccount() {
    return this._toAccount;
  }

  get value() {
    return this._value;
  }
  get date() {
    return this._date;
  }

  pay(paymentHistory: Payment): string {
    const sendValue = this.fromAccount.send(this.value, paymentHistory);
    this.toAccount.receive(sendValue, paymentHistory);

    return `${this.fromAccount.user.name} send ${sendValue} to ${this.toAccount.user.name}!`;
  }
}
