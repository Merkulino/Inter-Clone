import Payment from '../Payment/Payment';
import Account, {AccountParams} from './Account';
import Credit from './Credit';

export default class CreditAccount extends Account {
  constructor(
    params: AccountParams,
    private _creditLimit: Credit = new Credit(100),
  ) {
    super(params);
  }

  get creditLimit() {
    return this._creditLimit;
  }

  receive(value: number, paymentHistory: Payment): void {
    this._creditLimit.payCredit(value);
    super.receive(value, paymentHistory);
  }

  send(value: number, paymentHistory: Payment): number {
    if (value < this.creditLimit.creditAvaliable()) {
      this.creditLimit.useCredit(value);
    } else {
      throw new Error('Insufficient Value');
    }
    super.send(value, paymentHistory);
    return value;
  }
}
