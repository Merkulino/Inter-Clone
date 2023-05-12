import IInvestiment from '../Interfaces/IInvestment';
import Payment from '../Payment/Payment';
import Account, {AccountParams} from '../Account/Account';

export default class BrokeRage extends Account implements IInvestiment {
  constructor(
    params: AccountParams,
    private _name: string,
    private _balance: number,
    private _porcent: number,
  ) {
    super(params);
  }

  incomeForecast(): string {
    // Previsão de rendimento
    throw new Error('Method not implemented.');
  }

  get name() {
    return this._name;
  }

  get balance() {
    return this._balance;
  }

  get porcent() {
    return this._porcent;
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
