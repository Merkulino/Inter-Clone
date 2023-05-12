import Payment from '../Payment/Payment';
import User from '../User';

export type AccountParams = {
  id: number;
  _user: User;
  _bankStatement: Payment[] | void[];
  // _accountType: Account;
};

export default abstract class Account {
  private id: number;
  private _user: User;
  private _bankStatement: Payment[] | void[];
  // private _accountType: Account;

  constructor(params: AccountParams) {
    this.id = params.id;
    this._user = params._user;
    this._bankStatement = params._bankStatement;
    // this._accountType = params._accountType;
  }

  get user(): User {
    return this._user;
  }

  get bankStatement(): Payment[] | void[] {
    return this._bankStatement;
  }
  // get account(): Account {
  //   return this._accountType;
  // }

  abstract receive(value: number): void;

  abstract send(value: number): number;
}
