import Account from '../Account/Account';
import IInvestiment from '../Interfaces/IInvestment';
import {TransactionType} from '../Interfaces/types';
import InvestPay from '../Payment/InvestmentPayment';
import Payment from '../Payment/Payment';

export type BrokeRageParams = {
  name: string;
  balance?: number;
  porcent?: number;
  minInvestimentValue?: number;
  redemptionDate?: Date;
};

export default abstract class BrokeRage implements IInvestiment {
  private _name: string;
  private _balance: number;
  private _porcent: number; // 100 do CDI
  private _minInvestimentValue: number;
  private _redemptionDate: Date;

  constructor({
    name,
    balance = 0,
    porcent = 0,
    minInvestimentValue = 100,
    redemptionDate = new Date(),
  }: BrokeRageParams) {
    this._name = name;
    this._balance = balance;
    this._porcent = porcent;
    this._minInvestimentValue = minInvestimentValue;
    this._redemptionDate = redemptionDate;
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

  private static generatePaymentHistory = (
    bankAccount: Account,
    value: number,
    transaction: TransactionType,
  ): Payment => {
    return new InvestPay(
      {
        fromAccount: bankAccount,
        toAccount: bankAccount,
        value,
      },
      transaction,
    );
  };

  incomeForecast(): string {
    // Previsão de rendimento
    throw new Error('Method not implemented.');
  }

  addValue(value: number, bankAccount: Account): number | string {
    if (value >= this.minInvestimentValue) {
      const historyPayment = BrokeRage.generatePaymentHistory(
        bankAccount,
        value,
        'send',
      );

      const sendedValue = bankAccount.send(value, historyPayment);
      this._balance += sendedValue;
    }
    return 'Was not possible to get you money';
  }

  redeemValue(value: number, bankAccount: Account): number | string {
    // Criar um pagamento tipo investimento e usar dados do this.account
    if (value <= this.balance || this.redemptionDate < new Date()) {
      const historyPayment = BrokeRage.generatePaymentHistory(
        bankAccount,
        value,
        'receive',
      );

      bankAccount.receive(value, historyPayment);
      this._balance -= value;
      return this._balance;
    }
    return 'Was not possible to get you money';
  }
}
