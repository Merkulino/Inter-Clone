import ICredit from '../Interfaces/ICredit';

var mounth = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export default class Credit implements ICredit {
  private _limit: number;
  private _usage: number = 0;
  private _status: boolean = true;
  private _closeBill: Date = new Date(Date.now() + 31 * 24 * 60 * 60 * 1000);

  constructor(limit: number) {
    this._limit = limit;
  }

  get closeBill() {
    return this._closeBill;
  }

  get limit(): number {
    return this._limit;
  }

  get usage(): number {
    return this._usage;
  }
  get status(): boolean {
    return this._status;
  }

  creditAvaliable = () => this.limit - this.usage;

  verifyBillStatus = () => {
    if (new Date() > this.closeBill) {
      this._status = false;
    }
  };

  dateCloseBill = () => {
    this.verifyBillStatus();
    const cBill = this.closeBill as unknown as number;
    const mounthIndex = new Date(cBill - 31 * 24 * 60 * 60 * 1000).getMonth();
    return mounth[mounthIndex];
  };

  useCredit(value: number): string {
    if (!this.status) {
      throw new Error('Fatura ta fechada');
    }
    if (this.usage <= this.limit && value < this.creditAvaliable()) {
      this._usage += value;
    } else {
      throw new Error('It Was not possible use credit');
    }
    this.verifyBillStatus();
    return `
    use ${value} of ${this.limit},
    now you have ${this.creditAvaliable()} avaliable`;
  }

  payCredit(value: number): string {
    if (!this.status) {
      throw new Error('Fatura ta fechada');
    }
    if (this.usage > 0) {
      this._usage -= value;
    } else {
      throw new Error('No need pay credit');
    }
    this.verifyBillStatus();
    return `bill paid, now you have ${this.creditAvaliable()} avaliable!`;
  }
}
