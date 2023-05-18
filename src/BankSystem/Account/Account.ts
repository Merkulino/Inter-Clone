import Payment from '../Payment/Payment';
import User from '../User';

export type AccountParams = {
  id: number;
  _user: User;
  // _bankStatement: Payment[];
  // _accountType: Account;
};

export default abstract class Account {
  private id: number;
  private _user: User;
  protected _bankStatement: Payment[] | unknown[] = [];
  // private _accountType: Account;

  constructor(params: AccountParams) {
    this.id = params.id;
    this._user = params._user;
    // this._bankStatement = _bankStatement;
    // this._accountType = params._accountType;
  }

  get user(): User {
    return this._user;
  }

  get bankStatement(): Payment[] | unknown[] {
    if (typeof this._bankStatement !== 'undefined') {
      return this._bankStatement;
    }
    return [];
  }
  // get account(): Account {
  //   return this._accountType;
  // }

  receive(_value: number, paymentHistory: Payment): void {
    this._bankStatement.push(paymentHistory);
  }

  send(value: number, paymentHistory: Payment): number {
    this._bankStatement.push(paymentHistory);
    return value;
  }
}
