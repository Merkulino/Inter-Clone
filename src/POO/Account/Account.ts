import User from '../User';

type Payment = void;

export default abstract class Account {
  constructor(
    private id: number,
    private _user: User,
    private _bankStatement: Payment[],
    private _accountType: Account,
  ) {}

  get user(): User {
    return this._user;
  }

  get bankStatement(): Payment[] {
    return this._bankStatement;
  }
  get account(): Account {
    return this._accountType;
  }
}
