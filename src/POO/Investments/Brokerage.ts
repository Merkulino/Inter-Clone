import IInvestiment from '../Interfaces/IInvestment';
import Account from '../Account/Account';

export type BrokeRageParams = {
  account: Account;
  name: string;
  balance: number;
  porcent: number;
  minInvestimentValue: number;
  redemptionDate: Date;
};

export default abstract class BrokeRage implements IInvestiment {
  private _account: Account;
  private _name: string;
  private _balance: number;
  private _porcent: number = 100; // 100 do CDI
  private _minInvestimentValue: number = 100;
  private _redemptionDate: Date = new Date();

  constructor(params: BrokeRageParams) {
    this._account = params.account;
    this._name = params.name;
    this._balance = params.balance;
    this._porcent = params.porcent;
    this._minInvestimentValue = params.minInvestimentValue;
    this._redemptionDate = params.redemptionDate;
  }

  get account() {
    return this._account;
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

  get minInvestimentValue() {
    return this._minInvestimentValue;
  }
  get redemptionDate() {
    return this._redemptionDate;
  }

  incomeForecast(): string {
    // Previsão de rendimento
    throw new Error('Method not implemented.');
  }

  addValue(value: number) {
    if (value > this.minInvestimentValue) {
      // Criar um pagamento tipo investimento e usar dados do this.account
      this._balance += value;
    }
  }

  redeemValue(value: number): number | string {
    // Criar um pagamento tipo investimento e usar dados do this.account
    if (value <= this.balance && this.redemptionDate < new Date()) {
      this._balance -= value;
      return value;
    }
    return 'Was not possible to get you money';
  }
}
