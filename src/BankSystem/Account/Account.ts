import {PaymentParams} from '../Payment/Payment';
import User from '../User';

type StatementType = {
  date: Date;
  from: string;
  account: string;
  to: string;
  pay: string;
  value: number;
};

export type AccountParams = {
  id: number;
  _user: User;
  // _bankStatement: Payment[];
  // _accountType: Account;
};

export default abstract class Account {
  private id: number;
  private _user: User;
  protected _bankStatement: StatementType[] | any[] = [];
  // private _accountType: Account;

  constructor(params: AccountParams) {
    this.id = params.id;
    this._user = params._user;
    // this._bankStatement = _bankStatement;
    // this._accountType = params._accountType;
  }

  abstract get accountType(): string;

  get user(): User {
    return this._user;
  }

  get bankStatement(): StatementType[] | any[] {
    if (typeof this._bankStatement !== 'undefined') {
      return this._bankStatement;
    }
    return [];
  }
  // get account(): Account {
  //   return this._accountType;
  // }

  receive(_value: number, paymentHistory: PaymentParams): void {
    this._bankStatement.push({
      date: paymentHistory.date,
      // formatedDate: paymentHistory.date
      from: paymentHistory.fromAccount._user.name,
      account: paymentHistory.fromAccount.accountType,
      to: paymentHistory.toAccount._user.name,
      pay: paymentHistory.paymentName,
      value: paymentHistory.value,
    });
  }

  send(value: number, paymentHistory: PaymentParams): number {
    this._bankStatement.push({
      date: paymentHistory.date,
      // formatedDate
      from: paymentHistory.fromAccount._user.name,
      account: paymentHistory.fromAccount.accountType,
      to: paymentHistory.toAccount._user.name,
      pay: paymentHistory.paymentName,
      value: paymentHistory.value,
    });
    return value;
  }
}
